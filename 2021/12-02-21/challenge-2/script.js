const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split('\n');

let xPosition = 0;
let depth = 0;
let aim = 0;

for(let i=0;i<input.length;i++){
    let line = input[i].split(" ");
    let command = line[0];
    let value = Number(line[1]);

    switch(command) {
        case "forward":
            xPosition += value;
            depth += value * aim;
            break;
        case "up":
            aim -= value;
            break;
        case "down":
            aim += value;
            break;
    }
}

console.log(depth * xPosition);