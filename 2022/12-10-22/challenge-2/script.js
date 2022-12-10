const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');

let X = 1, awaitVal = 0, operation = 0, offset = 0;
let CRT = [[],[],[],[],[],[]];
CRT.forEach(x=>{for(let i=0;i<40;i++){x.push('░')}});

const trackSprite = (cycleNum) => {
    let row = Math.ceil(cycleNum/40)-1
    let pixel = (cycleNum % 40)-1
    if(Math.abs( pixel - X) <= 1){CRT[row][pixel] = '█'}
}

for(let i=1;i-offset<input.length;i++) {
    if(awaitVal === 0){
        if(input[(i-1)-offset].substring(0,4) === 'addx'){
            operation = Number(input[(i-1)-offset].split(' ')[1]);
            awaitVal=2;
        }
    }
    trackSprite(i);
    if(awaitVal === 1) {
        offset++;
        X+=operation;
    }
    awaitVal>0?awaitVal--:awaitVal=0;
}
CRT = CRT.map(line=>line.join(''))
console.log(CRT)