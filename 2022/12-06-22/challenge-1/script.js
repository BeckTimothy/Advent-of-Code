const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
input = input[0].split('')

for(let i=0; i<input.length-3-1; i++){
    let pointer =  [ input[i] , input[i+1] , input[i+2] , input[i+3] ];
    if (pointer.length === new Set(pointer).size) {
        console.log(i+4)
        return i+4;
    }
}