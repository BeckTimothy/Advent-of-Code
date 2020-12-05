const fs = require('fs');
let input = fs.readFileSync('../challenge-1/input.txt', {encoding: 'utf8', flag: 'r'});

function solve(input) {
    input = input.split("\n");
    for(let j = 0; j<input.length;j++) {
        //convert ticket string to binary then to integer
        input[j] = parseInt(input[j].replace(/R|B/gi, "1").replace(/L|F/gi, "0"),2);
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