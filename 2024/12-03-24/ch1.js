const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().replaceAll(/\s/gi,"")
const regexp = /mul\(\d{1,3},\d{1,3}\)/gi
let arr = [...input.match(regexp)];
let reduced = arr.reduce((acc,currentVal)=>{
    currentVal = currentVal.replace("mul(","").replace(")","").split(",")
    return acc + ( Number(currentVal[0]) * Number(currentVal[1]) )
},0)
console.log(reduced)