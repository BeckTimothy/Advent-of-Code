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

const findSimilarities = () => {
    let leftMap = new Map();
    leftArr.forEach(x => {
        if(leftMap.has(x)){
            leftMap.set(x, leftMap.get(x)+1);
        } else{
            leftMap.set(x, 1);
        }
    });
    let count = 0;
    rightArr.forEach(x => {
        if(leftMap.has(x)){
            count += ( x * leftMap.get(x) );
        }
    });

    return count;
}

let startTime = new Date();
console.log(startTime)
for(let i=0; i<10000; i++){
    findSimilarities()
}
console.log(new Date())
console.log(new Date()-startTime)
