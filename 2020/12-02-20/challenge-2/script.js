const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split('\n');
function solve(input) {
    let answerArr = [];
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].replace(/\s/gi, "");
        //WATCH ME OVERENGINEER THE FUCK OUT OF THIS
        let valOne = Number(input[i].substr(0, input[i].indexOf("-")));
        let valTwo = Number(input[i].substr(input[i].indexOf("-") + 1, input[i].indexOf(":") - 2 - input[i].indexOf("-")));
        let needle = input[i].substr(input[i].indexOf(":") - 1, 1);
        let pass = input[i].substr(input[i].indexOf(":") + 1);
        let isNeedleAtPosValOne = pass.charAt(valOne - 1) === needle;
        let isNeedleAtPosValTwo = pass.charAt(valTwo - 1) === needle;
        if ( ( isNeedleAtPosValOne || isNeedleAtPosValTwo ) && (isNeedleAtPosValOne !== isNeedleAtPosValTwo) ) {
            answerArr.push(pass);
        }
        //console.log(`${pass} contains the needle ${needle} ${typeof count} times, which is between or including ${valOne} and ${valTwo}\nin string: ${input[i]}`);
    }
    return (answerArr.length);
}
console.log(solve(input));
