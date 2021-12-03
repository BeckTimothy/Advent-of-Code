
const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split('\n');

let xPosition = 0;
let depth = 0;

for(let i=0;i<input.length;i++){
    let line = input[i].split(" ");
    let command = line[0];
    let value = line[1];

    switch(command) {
        case "forward":
            xPosition += Number(value);
            break;
        case "up":
            depth -= Number(value);
            break;
        case "down":
            depth += Number(value);
            break;
    }
}

console.log(depth * xPosition);