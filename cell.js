class Cell {
    constructor(x,y,state) {
        this.x = x;
        this.y = y;
        this.state = state;
        this.centerX = x+(cellSize)/2;
        this.centerY = y+(cellSize)/2;
        this.neighbors = [];
    }

    display() {
        stroke("gray");
        strokeWeight(0.5);

        if(this.state === 0) {
            fill("black");
        }else {
            fill(0,252,0);
        }
        
        rect(this.x,this.y,cellSize,cellSize);

        this.checkNeighbors();
    
    }

    checkNeighbors() {
        let aliveNeighbors = 0;
        for(let neighbor of this.neighbors) {
            if (neighbor.state === 1) {
                aliveNeighbors+=1;
            }
        }
        if (this.state === 1) {
            if (aliveNeighbors<2 || aliveNeighbors >3) {
                this.nextState = 0;
            }else if (aliveNeighbors === 3 || aliveNeighbors === 2 ) {
                this.nextState = 1;
            }else {
                this.nextState = this.state;
            }
        }else if (this.state === 0) {
            if (aliveNeighbors === 3 ) {
                this.nextState = 1;
            }else {
                this.nextState = this.state;
            }

        }
        
        
   }

}