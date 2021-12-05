const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split('\n');
//returns a binary of the most or least common values for each bit
const commonValues = (arr, type) => {
    let binArr = arr[0].split('');
    let mid = arr.length / 2;
    for(let i=1;i<arr.length;i++){
        let binary = arr[i].split('');
        binary.forEach((num, index) => {binArr[index] = Number(binArr[index]) + Number(num)})
    }
    return binArr.map((x,i) => {return type==="most" ? +(binArr[i]>=mid) : +!(binArr[i]>=mid) }).join('')

}
//uses the most or least common values to determine which binaries to filter
const parseBinaries = (arr, type) => {
    let i=0;
    let lastBinary = null;
    while(arr.length > 1){
        let commonValue = commonValues(arr,type);
        arr = arr.filter(binary => {
            lastBinary = binary;
            return binary[i] === commonValue[i]
        })
        i++
    }
    return parseInt(arr.length===1?arr[0]:lastBinary,2);
}

const getOxygenGeneratorRating = arr => parseBinaries(arr, "most");
const getCO2ScrubberRating = arr => parseBinaries(arr, "least");

let oxGenRating = getOxygenGeneratorRating(input);
console.log(`oxGenRating: ${oxGenRating}`);
let scrubRating = getCO2ScrubberRating(input);
console.log(`scrubberRating: ${scrubRating}`);
console.log(`lifeSupportRating: ${scrubRating * oxGenRating}`)