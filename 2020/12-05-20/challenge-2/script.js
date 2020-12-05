const fs = require('fs');
let input = fs.readFileSync('../challenge-1/input.txt', {encoding: 'utf8', flag: 'r'});

function getRow(ticket) {
    let count=0;
    let row = ticket.substr(0,7);
    row = row.split("").reverse().join("");
    for(let i=0; i<=row.length;i++) {
        if(row[i] === "B") {
            count = count +  ( Math.pow(2, (i)) );
        }
    }
    return count
}
function getColumn(ticket) {
    let count=0;
    let column = ticket.substring(7);
    column = column.split("").reverse().join("");
    for(let i=0; i<column.length;i++) {
        if(column[i] === "R") {
            count = count +  ( Math.pow(2, (i)) );
        }
    }
    return count;
}
function solve(input) {
    input = input.split("\n");
    for(let j = 0; j<input.length;j++) {
        input[j] = ( getRow(input[j]) * 8 ) + getColumn(input[j]);
    }
    let reduce = (x, y) => {if(x  === y - 1 ){return y}else{return x;}};
    input = input.sort(function(a, b) {
        return a - b;
    });
    input.shift();
    input = input.reduce(reduce);
    return input + 1;
}



console.log(solve(input));