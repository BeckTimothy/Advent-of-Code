const fs = require('fs');
let input = fs.readFileSync('../challenge-1/input.txt', {encoding:'utf8', flag:'r'});

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

function solveIt(input) {
    let slope1 = solve(input,1,1);
    let slope2 = solve(input,1,3);
    let slope3 = solve(input,1,5);
    let slope4 = solve(input,1,7);
    let slope5 = solve(input,2,1);
    return slope1*slope2*slope3*slope4*slope5;
}
console.log(solveIt(input));