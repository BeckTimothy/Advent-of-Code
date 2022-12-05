const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
//clean input data
let stack1 = [], stack2 = [], stack3 = [], stack4 = [], stack5 = [], stack6 = [], stack7 = [], stack8 = [], stack9 = [];
for(let i=7;i>=0;i--){
    if(input[i][1]  !== ' ' && input[i][1] !== undefined) stack1.push( input[i][1]  );
    if(input[i][5]  !== ' ' && input[i][5] !== undefined) stack2.push( input[i][5]  );
    if(input[i][9]  !== ' ' && input[i][9] !== undefined) stack3.push( input[i][9]  );
    if(input[i][13] !== ' ' && input[i][13] !== undefined) stack4.push( input[i][13] );
    if(input[i][17] !== ' ' && input[i][17] !== undefined) stack5.push( input[i][17] );
    if(input[i][21] !== ' ' && input[i][21] !== undefined) stack6.push( input[i][21] );
    if(input[i][25] !== ' ' && input[i][25] !== undefined) stack7.push( input[i][25] );
    if(input[i][29] !== ' ' && input[i][29] !== undefined) stack8.push( input[i][29] );
    if(input[i][33] !== ' ' && input[i][33] !== undefined) stack9.push( input[i][33] );
}
const stacks = [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9];
console.log(stacks);

const crane = (fromStack, toStack, quantity) => {
    for(let i=0;i<quantity; i++){
        let itemToMove = stacks[fromStack-1].pop();
        stacks[toStack-1].push( itemToMove );
    }
}

//loop through input
for(let j=10;j<input.length;j++){
    let temp = input[j].split(' ')
    crane(temp[3], temp[5], temp[1]);
}
console.log(
    stacks[0][stacks[0].length-1]+
    stacks[1][stacks[1].length-1]+
    stacks[2][stacks[2].length-1]+
    stacks[3][stacks[3].length-1]+
    stacks[4][stacks[4].length-1]+
    stacks[5][stacks[5].length-1]+
    stacks[6][stacks[6].length-1]+
    stacks[7][stacks[7].length-1]+
    stacks[8][stacks[8].length-1])

