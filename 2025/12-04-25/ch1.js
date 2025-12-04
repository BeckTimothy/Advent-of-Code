const fs = require('fs');
let input = fs.readFileSync('./input.txt');
//input = "..@@.@@@@.\n" +
//    "@@@.@.@.@@\n" +
//    "@@@@@.@.@@\n" +
//    "@.@@@@..@.\n" +
//    "@@.@@@@.@@\n" +
//    ".@@@@@@@.@\n" +
//    ".@.@.@.@@@\n" +
//    "@.@@@.@@@@\n" +
//    ".@@@@@@@@.\n" +
//    "@.@.@@@.@."
input = input.toString().trim().split('\n');

let accessibleRollCount = 0;

for(let y=0;y<input.length;y++) {
    for (let x = 0; x < input[y].length; x++) {

        let adjacentRollCount = 0;
        if (input[y].charAt(x) === '@') {
            if (input[y-1] && input[y-1][x-1] === '@')adjacentRollCount++
            if (input[y-1] && input[y-1][x  ] === '@')adjacentRollCount++
            if (input[y-1] && input[y-1][x+1] === '@')adjacentRollCount++

            if (input[y]   && input[y  ][x-1] === '@')adjacentRollCount++
            if (input[y]   && input[y  ][x+1] === '@')adjacentRollCount++

            if (input[y+1] && input[y+1][x-1] === '@')adjacentRollCount++
            if (input[y+1] && input[y+1][x  ] === '@')adjacentRollCount++
            if (input[y+1] && input[y+1][x+1] === '@')adjacentRollCount++
            if (adjacentRollCount < 4) {
                accessibleRollCount++
            }
        }

    }
}
console.log(accessibleRollCount)
