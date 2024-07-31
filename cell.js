class Cell {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.state = 0;
        this.centerX = x+(cellSize)/2;
        this.centerY = y+(cellSize)/2;
        this.neighbors = [];
        this.nextState;
    }

    display() {
        if(this.state === 0) {
            fill("white");
        }else {
            fill("black");
        }
        
        rect(this.x,this.y,cellSize,cellSize);
        this.checkNeighbors();
    
    }
    checkNeighbors() {
        let aliveNeighbors = 0;
        for(let neighbor of this.neighbors) {
            if (neighbor.state === 1) {
                aliveNeighbors++;
            }
        }
        if (aliveNeighbors<2 || aliveNeighbors >3) {
            this.nextState = 0;
        }else if (aliveNeighbors in [2,3]) {
            this.nextState = 1;
        }

    }

}