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
        if(( pointer - Number(num)) <= 0){
            numHitZero += Math.floor(Math.abs( ( pointer  - Number(num)) / 100 ) )+ (pointer!==0?1:0)
        }
        pointer = (( 11100 + pointer ) - Number(num)) % 100
    } else if(dir === 'R'){
        numHitZero += Math.floor((pointer + Number(num)) / 100)
        pointer = (pointer + Number(num)) % 100
    }
}
console.log(numHitZero)