const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split('\n');
let count = 0;
for(let i=0;i<=input.length;i++){
    let prevWindowSum = Number(input[i-1]) + Number(input[i]) +Number(input[i+1]);
    let windowSum =     Number(input[i]) + Number(input[i+1]) + Number(input[i+2]);

    if(i>0 && windowSum > prevWindowSum) {count++}
}
console.log(count);