const fs = require('fs');
let input = fs.readFileSync('./input.txt');
//input = "987654321111111\n811111111111119\n234234234234278\n818181911112111"
//input = "818181911112111"
input = input.toString().trim().split('\n');

let count = 0;
const getStartIndex = (battArr, bank) => {
    if(battArr.length < 1)return 0
    let temp = [...battArr];
    let tempBank = [...bank];
    let index = 0;

    for(let i=0;i<temp.length;i++){
        index = tempBank.indexOf(temp[i]);
        tempBank = tempBank.join('').substring(index+1).split('');
    }
    return (bank.length - tempBank.length)
}
let joltage = 0;
input.forEach(bank => {
    bank = bank.split('');
    let batteryArray = [];
    for(let batteriesLeft=12; batteriesLeft>0; batteriesLeft--){
        let largestBatteryIndex = getStartIndex(batteryArray, bank);
        for(let i=getStartIndex(batteryArray, bank); i<bank.length-batteriesLeft+1; i++){
            if( Number(bank[i]) > Number(bank[largestBatteryIndex]) ) largestBatteryIndex = i
        }
        batteryArray.push(bank[largestBatteryIndex].toString());
    }

    joltage += Number( batteryArray.join(''))
})
console.log(joltage)
