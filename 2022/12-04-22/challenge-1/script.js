const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
input = input.map(x=>{
    x = x.split(',').map(x => x.split("-").map(z=>Number(z)))
    return x
})
let count = 0
input = input.filter((x) => {
    let xOne = x[0][0], xTwo = x[0][1], yOne = x[1][0], yTwo = x[1][1];

    if ( (xOne <= yOne && xTwo >= yTwo) || (yOne <= xOne && yTwo >= xTwo) ) {
        //console.log(x)
        //console.log( (x[0][0] <= x[1][0] && x[0][1] >= x[1][1]) || (x[1][0] <= x[0][0] && x[1][1] >= x[0][1]) )
        count++
    }
})
console.log(count);