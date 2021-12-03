const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split('\n');
let count = 0;
input.reduce((x,y)=>{

    if(Number(y) > Number(x)){count++}

    console.log(`x: ${x}, y: ${y}, increased: ${Number(y) > Number(x)}; increment increased count: ${count}`)

    return y;
})
console.log(count);