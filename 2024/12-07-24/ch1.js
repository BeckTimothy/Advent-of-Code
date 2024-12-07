const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
let calibrationSum = 0;
const recurDangerously = (eq, arr) =>{
    let n = eq[0]
    if(arr.length === 0){
        arr.push(n);
        eq.shift();
        return recurDangerously(eq, arr)
    }
    if(eq.length > 0){
        let addArr = Array.from(arr)
        arr = arr.map(x=>x*n)
        addArr = addArr.map(x=>x+n)
        eq.shift();
        arr = arr.concat(addArr);
        return recurDangerously(eq, arr)
    }
    if(eq.length === 0) {
        return arr
    }
}
input.forEach(calibrationEq =>{
    calibrationEq = calibrationEq.split(':')
    let result = Number(calibrationEq[0]);
    let equation = calibrationEq[1].trim().split(' ').map(n=>Number(n))
    let accumulationArr = [];
    let solutions = recurDangerously(equation, accumulationArr);
    //console.log(result)
    if ( solutions.includes(result) ) calibrationSum+=result
})
console.log(calibrationSum)