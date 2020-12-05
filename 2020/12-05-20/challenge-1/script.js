const fs = require('fs');
let input = fs.readFileSync('../challenge-1/input.txt', {encoding: 'utf8', flag: 'r'});

function getRow(ticket) {
    //console.log(ticket);
    let count=0;
    let row = ticket.substr(0,7);
    //console.log(row);
    row = row.split("").reverse().join("");
    //console.log(row);
    for(let i=0; i<=row.length;i++) {
        if(row[i] === "B") {
           // console.log(`count: ${count} + ${( Math.pow(2, (i)) )} at ${i}`);
            count = count +  ( Math.pow(2, (i)) );
        }
    }
    //console.log(count);
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
        //console.log("\n");
        //console.log(input[j]);
        //console.log(`row: ${getRow(input[j])}; column: ${getColumn(input[j])}`);
        console.log(`Column: ${input[j]} Row: ${getRow(input[j])} SeatId: ${( getColumn(input[j]) * 8 ) + getRow(input[j])}`);
        input[j] = ( getRow(input[j]) * 8 ) + getColumn(input[j]);
        //console.log(input[j]);
    }
    console.log(input);
    let reduce = (x, y) => {if(x > y){return x}else{return y;}};
    input = input.reduce(reduce);

    return input;
}




    console.log(solve(input));