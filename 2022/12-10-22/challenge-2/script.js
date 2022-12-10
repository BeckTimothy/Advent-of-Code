const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');

let X = 1;
let awaitVal = 0;
let operation = 0
let offset = 0;
let trackedCycles = [[],[],[],[],[],[]];

trackedCycles.forEach(x=>{
    for(let i=0;i<40;i++){x.push('.')}
})
const trackCycle = (cycleNum) => {
    let row = Math.ceil(cycleNum/40)-1
    let pixel = (cycleNum % 40)-1
    if(Math.abs( pixel - X) <= 1){trackedCycles[row][pixel] = '#'}
}
for(let i=1;i-offset<input.length;i++) {
    if(awaitVal === 0){
        switch(input[(i-1)-offset].substring(0,4)){
            case 'noop':
                break;
            case 'addx':
                //console.log(Number(input[(i-1)-offset].split(' ')[1]))
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
trackedCycles = trackedCycles.map(line=>line.join(''))
console.log(trackedCycles)