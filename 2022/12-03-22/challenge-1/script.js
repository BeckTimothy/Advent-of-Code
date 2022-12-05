const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
const checkArr = (arr1,arr2) => { //97+ is lowercase
    let num = arr1.filter(item => arr2.includes(item)).join(arr2.filter(item => arr1.includes(item))).charCodeAt(0);
    return num >= 97 ? num - 96: num - 64 + 26;
}
input = input.map(x => {
    let backPocket = x.substring(x.length/2).split('');
    let frontPocket = x.substring(0, x.length/2).split('');
    return checkArr(frontPocket,backPocket)
})
console.log(input.reduce((x,y)=>x+y));