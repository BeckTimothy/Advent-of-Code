const fs = require('fs');
let input = fs.readFileSync('../challenge-1/input.txt', {encoding: 'utf8', flag: 'r'});
const countChar = (input) => {
    let arrOfGroups = input.split(/\s/);
    for (let j = 1; j < arrOfGroups.length; j++) {
        if(arrOfGroups[j].length === 0){
            arrOfGroups[j] = arrOfGroups[0]
        }
        for (let k = 0; k < arrOfGroups[0].length; k++) {
            let needle = arrOfGroups[0][k];
            if (!arrOfGroups[j].includes(needle)) {
                arrOfGroups[0] = arrOfGroups[0].replace(needle, " ");
            }
        }
        arrOfGroups[0] = arrOfGroups[0].replace(/\s/gi,"");
    }
    return arrOfGroups[0].length;
};
function solve(input){
    input = input.split("\n\n");
    let counter = 0;
    for(let i=0;i < input.length; i++){
        counter = counter + countChar(input[i]);
    }
    return counter;
}
console.log(solve(input));