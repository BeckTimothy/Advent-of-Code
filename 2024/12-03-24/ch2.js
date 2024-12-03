const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().replaceAll(/\s/gi,"")
const regexp = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/gi
let arr = [...input.match(regexp)];
let canMul = false;
let reduced = arr.reduce((acc,currentVal)=>{
    if(currentVal.includes("don"))canMul=false;
    if(currentVal.includes("do")&&!currentVal.includes("don"))canMul=true;
    if(canMul&&!currentVal.includes("do")){
        currentVal = currentVal.replace("mul(","").replace(")","").split(",")
        return acc + ( Number(currentVal[0]) * Number(currentVal[1]))
    }
    return acc
},0)
console.log(reduced)