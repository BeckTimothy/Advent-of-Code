let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\n/);

function solve(input) {
    input[1] = input[1].split(',');
    let buses = new Set();
    input[1].forEach((x) => {
        buses.add(x)
    });
    let arr = [];
    buses.delete('x');
    buses.forEach((x) => {
        arr.push(Number(x))
    });
    arr = arr.reduce((x, y) => { return x - (input[0] % x) < y - (input[0] % y) ?x : y});
    return arr * (arr - (input[0] % arr));
}

console.log(solve(input));