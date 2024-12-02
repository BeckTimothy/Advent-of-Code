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
//create map from right array
let rightMap = new Map();
rightArr.forEach(value => {
    if(rightMap.has(value)){
        rightMap.set(value, rightMap.get(value)+1);
    } else{
        rightMap.set(value, 1);
    }
});
let sum = 0;
//intersect mapped values and iterate through shared keys, adding value*rightQuantity*leftQuantity to sum
let sharedValues = new Set(leftMap.keys()).intersection(new Set(rightMap.keys()));
sharedValues.forEach((value)=>{
    sum += ( value * leftMap.get(value) * rightMap.get(value) );
});
console.log(sum);