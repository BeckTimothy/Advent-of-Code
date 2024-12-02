const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
let reports = input.map(report => report.split(' ').map(x=>Number(x)))
let filtered = reports.filter(report => {
    let isSafe = true;
    let isAscending;
    for(let i=1;i<report.length;i++){
        if(!isSafe){i=report.length}
        if( i===1 ) isAscending = report[0] < report[1];
        if(isAscending && !(report[i] - report[i-1] >= 1)) isSafe = false; // 1 2 5
        if(!isAscending && !(report[i] - report[i-1] <= -1))  isSafe = false; // 5 2 1
        if(Math.abs(report[i] - report[i-1]) > 3 || Math.abs(report[i] - report[i-1]) < 1) isSafe = false;
    }
    return isSafe
})
console.log(filtered.length) //598