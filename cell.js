class Cell {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    display() {
        rect(this.x,this.y,cellSize,cellSize);
    
    }

}