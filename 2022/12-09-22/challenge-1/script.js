const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');

class Rope {
    constructor(){
        this.headPosition = [0,0];
        this.tailPosition = [0,0];
        this.tailHistory = new Set();
    }
    get history() {
        return this.tailHistory;
    }
    addToHistory = () => {
        this.tailHistory.add(this.tailPosition.join(','));
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
                    this.headPosition[0]++;
                    break;
                case 'L':
                    this.headPosition[0]--;
                    break;
                case 'U':
                    this.headPosition[1]--;
                    break;
                case 'D':
                    this.headPosition[1]++;
                    break;
            }
            //console.log(this.headPosition);
            //each time head moves, calculate tail move
            let xDiff = this.headPosition[0] - this.tailPosition[0];
            let yDiff = this.headPosition[1] - this.tailPosition[1];

            if(Math.abs(xDiff) > 1){
                if(Math.abs(yDiff)===1){
                    this.tailPosition[0]+=(xDiff/2);
                    this.tailPosition[1]+=yDiff;
                }else{
                    this.tailPosition[0]+=(xDiff/2);
                }
            }
            if(Math.abs(yDiff) > 1){
                if(Math.abs(xDiff)===1){
                    this.tailPosition[1]+=(yDiff/2);
                    this.tailPosition[0]+=xDiff;
                }else{
                    this.tailPosition[1]+=(yDiff/2);
                }
            }

            //console.log(this.tailPosition)
            //store history
            this.addToHistory();
            //console.log(this.tailHistory.size)
            //console.log('\n\n')
        }
    }
}
let myRope = new Rope();
input.forEach(command => {
    myRope.moveHead(command);
})
console.log(myRope.history.size)