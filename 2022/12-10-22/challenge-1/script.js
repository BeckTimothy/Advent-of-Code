const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');

let X = 1;
let awaitVal = 0;
let operation = 0
let offset = 0;
let trackedCycles = [];

const trackCycle = (cycleNum) => {
    if(    cycleNum ===20
        || cycleNum ===60
        || cycleNum ===100
        || cycleNum ===140
        || cycleNum ===180
        || cycleNum ===220
    ){

        trackedCycles.push(X * cycleNum)
    }
}
for(let i=1;i-offset<input.length;i++) {
    if(awaitVal === 0){
        switch(input[(i-1)-offset].substring(0,4)){
            case 'noop':
                break;
            case 'addx':
                operation = Number(input[(i-1)-offset].split(' ')[1]);
                awaitVal=2;
                break;
        }
    }
    trackCycle(i);
    if(awaitVal === 1) {
        offset++;
        X+=operation;
    }
    awaitVal>0?awaitVal--:awaitVal=0;
}
console.log(trackedCycles)
console.log(trackedCycles.reduce((x,y)=>(x+y)))