const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n\r\n');
input = input.map(x =>
    +x.split('\r\n')
        .reduce( (x,y) => +x+ +y )
)
    .sort((x,y)=> y-x);
console.log(input[0]);