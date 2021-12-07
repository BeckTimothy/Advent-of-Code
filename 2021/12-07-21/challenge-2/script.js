const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split(',');

input = input.sort((x,y) => {return Number(x) - Number(y)});

let total = 0;
input.forEach(x => {total+=Number(x)})
let mean = total / input.length;
let indexOfMean;
let indexOfMedian = Math.floor((input.length/2));
const median = (arr) => {return input[indexOfMedian]}
let arrMedian = median(input)

input.forEach((x,i) => {
    if(Number(x) < Number(arrMedian)){
        indexOfMean = Number(x) <= Math.floor(mean) ? i : indexOfMean;
    } else {
        indexOfMean = Number(x) <= Math.ceil(mean) ? i : indexOfMean;
    }
})

let bestFuelCost = 9999999999;
let bestIndex;
for(let i = input[indexOfMean]+1; i >= input[indexOfMedian]; i--){
    let count = 0;
    for(let j=0;j<input.length;j++){
        let diff = Math.abs(Number(i) - Number(input[j]));
        if(diff > 0) {
            let multi = diff + 1;
            if (diff % 2 === 0) {
                count += (multi * (diff / 2))
            } else {
                count += (((multi * ((diff - 1) / 2))) + (multi / 2))
            }
        }

    }
    if(count < bestFuelCost){
        bestFuelCost = count;
        bestIndex = i;
    }
}

console.log(bestIndex)
console.log(bestFuelCost)