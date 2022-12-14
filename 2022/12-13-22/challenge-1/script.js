const fs = require('fs');
let input = fs.readFileSync('./test.txt');
input = input.toString().trim().split('\r\n\r\n');
input = input.map(x=> x.split('\r\n').map(y=>eval(y)))
console.log(input)


const compare = (left, right) => {
    //If both values are integers, the lower integer should come first
    if(typeof left === "number" && typeof right === "number"){

    }
    //If exactly one value is an integer, convert the integer.
    if(typeof left === "number" && typeof right === "object"){
        left = [left];
    }
    if(typeof left === "object" && typeof right === "number"){
        right = [right];
    }
    //If both values are lists,
    //If the left list runs out of items first, the inputs are in the right order.
    if(typeof left === "object" && typeof right === "object"){

    }

}