let rows = 20;
let cols = 20;
let grid = [];
let cellSize;
let clickX;
let clickY;

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
            if (dist(cell.centerX,cell.centerY,clickX,clickY) < 1.4*cellSize/2) {
                console.log(cell.centerX);
                console.log(clickX);
                cell.state = 1;
                clickX = undefined;
                clickY = undefined;
            }
            cell.display();
        }

    }
}

function mouseClicked() {
    clickX = mouseX;
    clickY = mouseY;

}