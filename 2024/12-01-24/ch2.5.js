const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
let leftArr = [];
let rightArr = [];
input.forEach(line => {
    let touple = line.split("   ");
    leftArr.push(Number(touple[0]));
    rightArr.push(Number(touple[1]));
});
//create map from left array
let leftMap = new Map();
leftArr.forEach(value => {
    if(leftMap.has(value)){
        leftMap.set(value, leftMap.get(value)+1);
    } else{
        leftMap.set(value, 1);
    }
});
let sum = 0;
//iterate through right array adding value*quantity to sum if present in left map
rightArr.forEach(value => {
    if(leftMap.has(value)){
        sum += ( value * leftMap.get(value) );
    }
});
console.log(sum);