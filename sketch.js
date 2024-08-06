let grid;
let cellSize = 5;
let rows;
let cols;
let clickX;
let clickY;
let startGame;
let generation = 0;
let aliveCells = 0;
const statsContainer = document.createElement("div");
statsContainer.classList.add("stats")
const body = document.querySelector("body");
const generationContainer = document.createElement("div");
const aliveCellsContainer = document.createElement("div");

function make2dArray(rows,cols) {
    //2d array filled with zeros
    let array = [];
    for(let i = 0; i<rows; i++){
        array.push(Array());
        for(let j = 0; j<cols;j++) {
            array[i][j] = 0;
        }

    }
    return array;
}


function setup() {
    frameRate(20);
    createCanvas(1200, 800);

    body.appendChild(statsContainer);
    statsContainer.appendChild(generationContainer);
    statsContainer.appendChild(aliveCellsContainer);




    rows = (height)/cellSize;
    cols = (width)/cellSize;
    grid = make2dArray(rows,cols);
    // initial (random) state
    grid = grid.map(row=>row.map(cell=>cell=randomState()));

}
  
function draw() {
    aliveCells = 0;
    generation++;
    let nextGrid = make2dArray(rows,cols);

    background(0);
    //draw cells
    for(let i = 0; i<rows; i++) {
        for(let j = 0; j<cols; j++) {
            let x = cellSize*j;
            let y = cellSize*i;
            if (grid[i][j] === 1){
                fill(0, 252, 0);
                rect(x,y,cellSize,cellSize);
                aliveCells++;

            }
        }
    //update cells to next generation
           


    }
    for(let i = 0; i<rows; i++) {
        for(let j = 0; j<cols; j++) {
            let aliveNeighbors = 0;
            for(let x = i-1; x <= i+1;x++) {
                for(let y = j-1; y<= j+1;y++) {
                    if (x>=0 && x<rows-1 && y>=0 && y<cols-1) {
                       aliveNeighbors += grid[x][y];
                    }
                    }
                    
                }
            aliveNeighbors-=grid[i][j];
        if (grid[i][j] === 1) {
                if (aliveNeighbors<2 || aliveNeighbors >3) {
                    nextGrid[i][j] = 0;
                }else if (aliveNeighbors === 3 || aliveNeighbors === 2 ) {
                    nextGrid[i][j] = 1;
                }else {
                    nextGrid[i][j] = grid[i][j];

                }
        }else if (grid[i][j] === 0) {
            if (aliveNeighbors === 3 ) {
                    nextGrid[i][j] = 1;
            }else {
                nextGrid[i][j] = grid[i][j];
                }

                }

            
        }
    }
    grid = nextGrid;   //display alive cells and current gen
    generationContainer.textContent = ("Current Generation: "+generation);
    aliveCellsContainer.textContent = ("Alive Cells: "+aliveCells);

    //for(row of grid) {
    //    for(cell of row) {
    //        if(cell.nextState !== undefined) {
    //            cell.state = cell.nextState;
    //        }
    //    }
    

    //}
}

function mouseClicked() {
    clickX = mouseX;
    clickY = mouseY;

}




function randomState() {
    let number = Math.random();
    let state;
    if (number>=0.5) {
        state = 1;
    }else {
        state = 0;
    }
    return state;
}



