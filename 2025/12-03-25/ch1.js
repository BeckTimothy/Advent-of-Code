const fs = require('fs');
let input = fs.readFileSync('./input.txt');
//input = "987654321111111\n811111111111119\n234234234234278\n818181911112111"
input = input.toString().trim().split('\n');

let joltage = 0;
input.forEach(bank => {
    bank = bank.split('');
    let largestBattery = 0;
    for(let i=0;i<bank.length-1;i++){
        if( Number(bank[i]) > largestBattery ) largestBattery = Number(bank[i])
    }
    let secondBattery = 0;
    for(let i=bank.indexOf(largestBattery.toString())+1;i<bank.length;i++){
        if( Number(bank[i]) > secondBattery ) secondBattery = Number(bank[i])
    }
    console.log(Number( largestBattery.toString() + secondBattery.toString()))
    joltage += Number( largestBattery.toString() + secondBattery.toString())
})
console.log(joltage)