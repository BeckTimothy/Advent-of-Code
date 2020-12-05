const fs = require('fs');
let input = fs.readFileSync('../challenge-1/input.txt', {encoding: 'utf8', flag: 'r'});

function solve(input) {
    input = input.split("\n");
    for(let j = 0; j<input.length;j++) {
        input[j] = parseInt(input[j].replace(/R|B/gi, "1").replace(/L|F/gi, "0"),2);
    }
    input.pop();
    let reduce = (x, y) => {if(x > y){return x}else{return y;}};
    input = input.reduce(reduce);
    return input;
}
    console.log(solve(input));