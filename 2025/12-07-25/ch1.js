const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'});
//input = "123 328  51 64 \n" +
//        " 45 64  387 23 \n" +
//        "  6 98  215 314\n" +
//        "*   +   *   +  "
input = input.toString().trim().split('\n');
input = input.map(x => x.split(''))
let tachyonBeams = new Set;
let splitCount = 0;
for(let i=0; i<input.length; i++){
    for(let j=0; j<input[i].length; j++){
        if(input[i][j] === 'S'){
            tachyonBeams.add(j);
        }
        if(input[i][j] === '^' && tachyonBeams.has(j)){
            splitCount++;
            tachyonBeams.delete(j);
            if(input[i][j-1] === "."){
                tachyonBeams.add(j-1);
            }
            if(input[i][j+1] === "."){
                tachyonBeams.add(j+1);
            }
        }
    }
}
console.log(splitCount)