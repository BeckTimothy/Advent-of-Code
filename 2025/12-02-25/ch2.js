const fs = require('fs');
let input = fs.readFileSync('./input.txt');
//input = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124"
input = input.toString().trim().split(',');

let accumulator =0;
const scanRange = (start, finish) => {
    start = Number(start);
    finish = Number(finish);
    for(let i=start;i<=finish;i++){
        accumulator+=scanValue(i)
    }
};
const scanValue = (num) => {
    let str = num.toString();
    for(let i=1; i<= str.length/2; i++){
        if(str.length%i===0){
            if(checkSplitSubstring(str,i)){
                return Number(str);
            }
        }
    }
    return 0;
};
const checkSplitSubstring = (string, num) => {
    let arr = [];
    for(let i=0; i<string.length; i+=num){
        arr.push(string.substring(i,i+num))
    }
    return arr.every( v => v === arr[0] )
}
input.forEach(pair => {
    pair = pair.split("-");
    scanRange(pair[0], pair[1])
})
console.log(accumulator)