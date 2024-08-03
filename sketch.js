let grid = [];
let cellSize = 20;
let rows;
let cols;
let clickX;
let clickY;
let startGame;

function setup() {
    createCanvas(800, 800);
    frameRate(8);
    rows = height/cellSize;
    cols = width/cellSize;
    for (let i = 0; i<rows; i++) {
            grid.push(Array());
            for (let j = 0; j<cols; j++) {
                let x = (width/cols)*j;
                let y = (height/rows)*i;
                grid[i][j] = new Cell(x,y,randomState());
            }
        }
    addCellNeighbors(grid);
    }
  
function draw() {
    background(220);
    for(row of grid) {
        for(cell of row) {
            if (dist(cell.centerX,cell.centerY,clickX,clickY) < 1.4*cellSize/2) {
                cell.state = 1;
                clickX = undefined;
                clickY = undefined;
            }
            cell.display();
        }
    }
    for(row of grid) {
        for(cell of row) {
            if(cell.nextState !== undefined) {
                cell.state = cell.nextState;
            }
        }
    

    }
}

function mouseClicked() {
    clickX = mouseX;
    clickY = mouseY;

}


function addCellNeighbors(grid) {
    for (let i = 0;i<rows; i++) {
        for(let j = 0; j<cols; j++) {
            let cell = grid[i][j];
            let cellX = i;
            let cellY = j;
            if (i<rows-1 ) {
                cell.neighbors.push(grid[i+1][j]);
            }
            if (i>0) {
                cell.neighbors.push(grid[i-1][j]);
            }
            if (j>0) {
                cell.neighbors.push(grid[i][j-1]);
            }
            if (j<cols-1) {
                cell.neighbors.push(grid[i][j+1]);
            }
            if (i>0 && j>0) {
                cell.neighbors.push(grid[i-1][j-1]);
            }
            if (i<rows-1 && j<cols-1) {
                cell.neighbors.push(grid[i+1][j+1]);
            }
            if (i>0 && j<cols-1) {
                cell.neighbors.push(grid[i-1][j+1]);
            }
            if (i<rows-1 && j>0) {
                cell.neighbors.push(grid[i+1][j-1]);
            }
        }

    }
}

function randomState() {
    let number = Math.random();
    let state;
    if (number>=0.75) {
        state = 1;
    }else {
        state = 0;
    }
    return state;
}