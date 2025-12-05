const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'});
input = "3-5\n" +
    "10-14\n" +
    "16-20\n" +
    "12-18\n" +
    "\n" +
    "1\n" +
    "5\n" +
    "8\n" +
    "11\n" +
    "17\n" +
    "32"
input = input.split('\n\n');
let idRanges = input[0].split('\n');
let ingredientIds = input[1].split('\n');

let freshCount = 0;

ingredientIds.forEach(ing => {

    for(let i=0; i<idRanges.length; i++){
        let temp = idRanges[i].split("-")
        let min = Number(temp[0]);
        let max = Number(temp[1]);

        if(Number(ing) >= min && Number(ing) <= max){
            freshCount++
            i+=idRanges.length;
        }
    }
})
console.log(freshCount)