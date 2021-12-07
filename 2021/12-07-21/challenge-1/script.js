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

console.log(indexOfMean)
console.log(indexOfMedian)
let num = 0;
//input.forEach(x => {
//    num += Math.abs(x-arrMedian)
//})
let bestFuelCost = 9999999999;
let bestIndex;
for(let i = input[indexOfMean]+1; i >= input[indexOfMedian]; i--){
    let testMedian = input[i];
    let count = 0;
    //console.log(`\ncount at index[${i}]`)
    //console.log(input.length)
    for(let j=0;j<input.length;j++){

        let diff = Math.abs(Number(i) - Number(input[j]));
        //console.log(`${i} and ${input[j]}; diff: ${diff}`)
        if(diff > 0) {
            let multi = diff + 1;
            if (diff % 2 === 0) {
                //console.log((multi * (diff / 2)))
                count += (multi * (diff / 2))
            } else {
                //console.log(((multi * ((diff - 1) / 2)) + (multi / 2)))
                count += (((multi * ((diff - 1) / 2))) + (multi / 2))
            }
        }

    }
    if(count < bestFuelCost){
        bestFuelCost = count;
        bestIndex = i;
    }
}
console.log('\n')
console.log(bestIndex)
console.log(bestFuelCost)