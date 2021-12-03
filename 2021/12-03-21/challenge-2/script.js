const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split('\n');
let iter = input[0].split('');
let midVal = Math.floor(input.length / 2);

for(let i=1;i<input.length;i++){
    let binary = input[i].split('');
    binary.forEach((num, index) => {iter[index] = Number(iter[index])+Number(num)})
}

let gammaRate = iter.map((x,i) => {return iter[i]>midVal?1:0}).join('');
let epsilon = iter.map((x,i) => {return iter[i]>midVal?0:1}).join('');
console.log(`gammaRate: ${parseInt(gammaRate,2)}`);
console.log(`epsilon value: ${parseInt(epsilon, 2)}`);
console.log(`power consumption: ${parseInt(epsilon,2) * parseInt(gammaRate,2)}`);

let inputsToFilter = input;
let position=0;
let lookup = null;

while(inputsToFilter.length > 1){

    iter = inputsToFilter[0].split('');
    midVal = Math.ceil(inputsToFilter.length / 2);


    for(let i=1;i<inputsToFilter.length;i++){
        let binary = inputsToFilter[i].split('');
        binary.forEach((num, index) => {iter[index] = Number(iter[index])+Number(num)})
    }

    let mostCommonValue = iter.map((x,i) => {return iter[i]>=midVal?1:0}).join('');

    inputsToFilter = inputsToFilter.filter(n => {
        lookup = n;
        return n[position] === mostCommonValue[position]
    })
    position++
}
let oxGenRating = parseInt(inputsToFilter.length===1?inputsToFilter[0]:lookup,2);
console.log(`oxGenRating: ${oxGenRating}`);

inputsToFilter = input;
position=0;
lookup = null;
while(inputsToFilter.length > 1){

    iter = inputsToFilter[0].split('');
    midVal = Math.ceil(inputsToFilter.length / 2);


    for(let i=1;i<inputsToFilter.length;i++){
        let binary = inputsToFilter[i].split('');
        binary.forEach((num, index) => {iter[index] = Number(iter[index])+Number(num)})
    }

    let leastCommonValue = iter.map((x,i) => {return iter[i]>=midVal?0:1}).join('');
    inputsToFilter = inputsToFilter.filter(n => {
        lookup = n;
        return n[position] === leastCommonValue[position]
    })
    position++
}
let scrubRating = parseInt(inputsToFilter.length===1?inputsToFilter[0]:lookup,2);
console.log(`scrubberRating: ${scrubRating}`);
console.log(`lifeSupportRating: ${scrubRating * oxGenRating}`)
