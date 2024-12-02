const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
let leftArr = [];
let rightArr = [];
input.forEach(x => {
    x=x.split("   ");
    leftArr.push(Number(x[0]));
    rightArr.push(Number(x[1]));
})

let leftMap = new Map();
leftArr.forEach(x => {
    if(leftMap.has(x)){
        leftMap.set(x, leftMap.get(x)+1)
    } else{
        leftMap.set(x, 1)
    }
})

let rightMap = new Map();
rightArr.forEach(x => {
    if(rightMap.has(x)){
        rightMap.set(x, rightMap.get(x)+1)
    } else{
        rightMap.set(x, 1)
    }
})

let count = 0;
let sharedValues = new Set(leftMap.keys()).intersection(new Set(rightMap.keys()));
sharedValues.forEach((value)=>{
    count += ( value * leftMap.get(value) * rightMap.get(value) )
})
console.log(count)