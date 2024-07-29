let rows = 20;
let cols = 20;
let grid = [];
let cellSize;

function setup() {
    createCanvas(400, 400);
    cellSize = width/cols;
    for (let i = 0; i<rows; i++) {
            grid.push(Array());
            for (let j = 0; j<cols; j++) {
                let x = (width/cols)*j;
                let y = (height/rows)*i;
                grid[i][j] = new Cell(x,y);
            }
        }
    }
  
function draw() {
    background(220);
    for(row of grid) {
        for(cell of row) {
            cell.display();
        }

    }
}