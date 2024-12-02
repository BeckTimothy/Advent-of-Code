const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
let leftArr = [];
let rightArr = [];
input.forEach(x => {
    x=x.split("   ");
    leftArr.push(Number(x[0]));
    rightArr.push(Number(x[1]));
});
//potentially faster solution to part 2
let leftMap = new Map();
leftArr.forEach(value => {
    if(leftMap.has(value)){
        leftMap.set(value, leftMap.get(value)+1);
    } else{
        leftMap.set(value, 1);
    }
});
let sum = 0;
rightArr.forEach(value => {
    if(leftMap.has(value)){
        sum += ( value * leftMap.get(value) );
    }
});
console.log(sum);