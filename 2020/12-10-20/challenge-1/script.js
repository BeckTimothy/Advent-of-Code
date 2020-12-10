let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\s/);

function solve(input) {
    input = input.sort( (a, b) => Number(a) - Number(b) );
    let ones = 0;
    let threes = 0;
    input.unshift(0); //add the starting value to the array
    input.reduce( (a,b) => {
        if(Number(b) - Number(a) === 1){
            ones++;
            return b;
        }else if(Number(b) - Number(a) === 3){
            threes++;
           return b;
        }
    });
    return ones * (threes + 1); //the +1 is the built in +3 adapter
}
console.log(solve(input));