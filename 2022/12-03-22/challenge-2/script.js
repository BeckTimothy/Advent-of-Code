const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');

const checkArr = (arr1,arr2,arr3) => { //97+ is lowercase
    let num = arr1.filter(item => arr2.includes(item)).filter(item => arr3.includes(item));
    console.log(num)
    num = num[0].charCodeAt(0);
    console.log(num >= 97 ? num - 96: num - 64 + 26)
    return num >= 97 ? num - 96: num - 64 + 26;
}
let count = 0
for(let i = 0; i < input.length/3 ; i++){
    count += checkArr(input[i*3].split(''),input[(i*3)+1].split(''),input[(i*3)+2].split(''))
}
console.log(count);