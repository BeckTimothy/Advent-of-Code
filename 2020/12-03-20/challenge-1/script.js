const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});

function solve(input, rise, run,) {
    input = input.split('\n');
    let yPos = 0; 
    let xPos = 0;
    let treeCount = 0;
    for(yPos;yPos<input.length;yPos = yPos + rise){
        if(input[yPos][xPos] === "#"){
            treeCount++;
        }
        xPos = (xPos + run) ;
        xPos > input[0].length-1 ? xPos = (xPos % input[0].length):xPos;
    }
    return treeCount;
}

console.log(solve(input,1,3));