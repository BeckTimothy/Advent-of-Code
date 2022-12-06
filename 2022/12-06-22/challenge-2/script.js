const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
input = input[0].split('')

const lengthOfStartMarker = 14;
for(let i=0; i<input.length-3-1; i++){
    let pointer =  [  ];
    for(let j=0; j<lengthOfStartMarker; j++){
        pointer.push(input[i+j]);
    }
    if (pointer.length === new Set(pointer).size) {
        console.log(i+lengthOfStartMarker)
        return i+lengthOfStartMarker;
    }
}