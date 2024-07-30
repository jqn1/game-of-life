class Cell {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.state = 0;
        this.centerX = x+(cellSize)/2;
        this.centerY = y+(cellSize)/2;
    }

    display() {
        if(this.state === 0) {
            fill("white");
        }else {
            fill("black");
        }
        
        rect(this.x,this.y,cellSize,cellSize);
        

    
    }

}