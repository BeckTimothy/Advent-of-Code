const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\n');

let dial = [];
for(let i = 0; i<=99; i++){
    dial.push(i);
}
let pointer = 50;
let numHitZero = 0;
for(let i=0; i<input.length; i++){
    let line = input[i].trim();
    let dir = line.substring(0,1);
    let num = line.substring(1);
    if(dir === 'L'){
        pointer = (( 100 + pointer ) - Number(num)) % 100
    } else if(dir === 'R'){
        pointer = (pointer + Number(num)) % 100
    }
    if(pointer === 0){
        numHitZero++
    }
}
console.log(numHitZero)