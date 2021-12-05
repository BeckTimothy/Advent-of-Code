const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split('\n');
let iter = input[0].split('');
let midVal = input.length / 2;

for(let i=1;i<input.length;i++){
    let binary = input[i].split('');
    binary.forEach((num, index) => {iter[index] = Number(iter[index])+Number(num)})
}

let gammaRate = iter.map((x,i) => {return iter[i]>midVal?1:0}).join('');
let epsilon = iter.map((x,i) => {return iter[i]>midVal?0:1}).join('');
console.log(midVal)
console.log(parseInt(gammaRate,2));
console.log(parseInt(epsilon,2));
console.log(parseInt(epsilon,2) * parseInt(gammaRate,2));