const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'});
//input = "123 328  51 64 \n" +
//        " 45 64  387 23 \n" +
//        "  6 98  215 314\n" +
//        "*   +   *   +  "
input = input.toString().trim().split('\n');
input = input.map(x => {
    x=x.split(" ")
    x=x.filter(str => str.length>0)
    return x;
})
let count = 0;
for(let i=0; i<input[0].length; i++){
    if(input[4][i] === '*'){
        count += (Number(input[0][i]) * Number(input[1][i]) * Number(input[2][i]) * Number(input[3][i]))
    } else{
        count += (Number(input[0][i]) + Number(input[1][i]) + Number(input[2][i]) + Number(input[3][i]))
    }
}
console.log(count)