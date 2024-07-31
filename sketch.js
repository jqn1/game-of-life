let rows = 20;
let cols = 20;
let grid = [];
let cellSize;
let clickX;
let clickY;
let startGame;

function setup() {
    createCanvas(400, 400);
    frameRate(2);
    cellSize = width/cols;
    for (let i = 0; i<rows; i++) {
            grid.push(Array());
            for (let j = 0; j<cols; j++) {
                let x = (width/cols)*j;
                let y = (height/rows)*i;
                grid[i][j] = new Cell(x,y);
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

