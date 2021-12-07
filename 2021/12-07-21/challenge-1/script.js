const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split(',');

input = input.sort((x,y) => {return Number(x) - Number(y)});
console.log(input)
console.log(Math.floor(input.length/2))
const median = (arr) => {return input[Math.floor((input.length/2)) ]}
let arrMedian = median(input)
let num = 0;
input.forEach(x => {
    num += Math.abs(x-arrMedian)
})
console.log(num)