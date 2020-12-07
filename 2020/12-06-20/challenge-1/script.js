const fs = require('fs');
let input = fs.readFileSync('../challenge-1/input.txt', {encoding: 'utf8', flag: 'r'});

function solve(input){
 input = input.split("\n\n");
    let count = 0;
 for(let i=0;i < input.length; i++){

     for(let j=97; j<123; j++){
         if(input[i].includes( String.fromCharCode(j) )){
             count++
         }
        if(j === 122){
            input[i] = count;
        }
     }
 }
    return count;
    //return input;
}
console.log(solve(input));
