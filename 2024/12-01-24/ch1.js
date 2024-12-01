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
leftArr = leftArr.sort((x,y)=>x-y);
rightArr = rightArr.sort((x,y)=>x-y);
let count =0;
for(let i=0;i<leftArr.length;i++){
    count += Math.abs(leftArr[i]-rightArr[i])
}
console.log(count)
