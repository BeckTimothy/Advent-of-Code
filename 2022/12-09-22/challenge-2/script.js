const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');

class Rope {
    constructor(){
        this.ropePosition = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
        this.tailHistory = new Set();
    }
    get history() {
        return this.tailHistory;
    }
    addToHistory = () => {
        this.tailHistory.add(this.ropePosition[9].join(','));
    }
    moveHead = (command) => {
        //console.log(command)
        let direction = command.split(' ')[0];
        let distance = Number(command.split(' ')[1]);
        //create loop for distance moved
        for(let i=0;i<distance;i++){
            //move head in given direction
            switch(direction){
                case 'R':
                    this.ropePosition[0][0]++;
                    break;
                case 'L':
                    this.ropePosition[0][0]--;
                    break;
                case 'U':
                    this.ropePosition[0][1]--;
                    break;
                case 'D':
                    this.ropePosition[0][1]++;
                    break;
            }
            //move each knot/tail
            for(let i=0;i<9;i++){
                this.moveTail(i);
            }
            //store history
            this.addToHistory();
        }
    }
    moveTail = (i) => {

        //each time head moves, calculate tail move
        if(this.ropePosition[i][0] - this.ropePosition[i+1][0] > 1
            && this.ropePosition[i][1] - this.ropePosition[i+1][1] > 0) {
            this.ropePosition[i+1][0]++;
            this.ropePosition[i+1][1]++;
        }
        if(this.ropePosition[i][0] - this.ropePosition[i+1][0] > 1
            && this.ropePosition[i][1] - this.ropePosition[i+1][1] < 0) {
            this.ropePosition[i+1][0]++;
            this.ropePosition[i+1][1]--;
        }
        if(this.ropePosition[i][0] - this.ropePosition[i+1][0] < -1
            && this.ropePosition[i][1] - this.ropePosition[i+1][1] > 0) {
            this.ropePosition[i+1][0]--;
            this.ropePosition[i+1][1]++;
        }
        if(this.ropePosition[i][0] - this.ropePosition[i+1][0] < -1
            && this.ropePosition[i][1] - this.ropePosition[i+1][1] < 0) {
            this.ropePosition[i+1][0]--;
            this.ropePosition[i+1][1]--;
        }

        if(this.ropePosition[i][1] - this.ropePosition[i+1][1] > 1
            && this.ropePosition[i][0] - this.ropePosition[i+1][0] > 0) {
            this.ropePosition[i+1][1]++;
            this.ropePosition[i+1][0]++;
        }
        if(this.ropePosition[i][1] - this.ropePosition[i+1][1] > 1
            && this.ropePosition[i][0] - this.ropePosition[i+1][0] < 0) {
            this.ropePosition[i+1][1]++;
            this.ropePosition[i+1][0]--;
        }
        if(this.ropePosition[i][1] - this.ropePosition[i+1][1] < -1
            && this.ropePosition[i][0] - this.ropePosition[i+1][0] > 0) {
            this.ropePosition[i+1][1]--;
            this.ropePosition[i+1][0]++;
        }
        if(this.ropePosition[i][1] - this.ropePosition[i+1][1] < -1
            && this.ropePosition[i][0] - this.ropePosition[i+1][0] < 0) {
            this.ropePosition[i+1][1]--;
            this.ropePosition[i+1][0]--;
        }

        if(this.ropePosition[i][0] - this.ropePosition[i+1][0] > 1) {
            this.ropePosition[i+1][0]++;
        }
        if(this.ropePosition[i][0] - this.ropePosition[i+1][0] < -1) {
            this.ropePosition[i+1][0]--;
        }
        if(this.ropePosition[i][1] - this.ropePosition[i+1][1] > 1) {
            this.ropePosition[i+1][1]++;
        }
        if(this.ropePosition[i][1] - this.ropePosition[i+1][1] < -1) {
            this.ropePosition[i+1][1]--;
        }
    }
}
let myRope = new Rope();
input.forEach(command => {
    myRope.moveHead(command);
})
console.log(myRope.history.size)