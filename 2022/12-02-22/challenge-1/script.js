const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
// input = input.map(x =>
//     +x.split('\r\n')
//         .reduce( (x,y) => +x+ +y )
// )
//     .sort((x,y)=> y-x);
const rps = (x) => {
    switch (x) {
        case 'A X': return 1+3;
        case 'B X': return 1;
        case 'C X': return 1+6;

        case 'A Y': return 2+6;
        case 'B Y': return 2+3;
        case 'C Y': return 2;

        case 'A Z': return 3;
        case 'B Z': return 3+6;
        case 'C Z': return 3+3;
        default: return x;
    }
}

let answer = input.reduce((x,y) => {
    return rps(x) + rps(y);
})
console.log(answer);
