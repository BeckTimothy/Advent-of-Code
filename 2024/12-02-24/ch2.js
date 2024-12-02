const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
let reports = input.map(report => report.split(' ').map(x=>Number(x)))

let filtered = reports.filter(_report => {
    let report = _report
    let isSafe = true;
    let isAscending;
    let recalibrated = 0;
    let badLevel;

    for(let i=1;i<report.length;i++){
        if(!isSafe){
            i=report.length;
        }
        if( i===1 ){
            let firstPair = report[0] < report[1];
            let secondPair = report[0] < report[report.length-1];
            let lastPair = report[1] < report[report.length-1];
            isAscending =  ( firstPair && secondPair ) || ( secondPair && lastPair ) || ( firstPair && lastPair );
        }
        if(isAscending && !(report[i] - report[i-1] >= 1)) isSafe = false;
        if(!isAscending && !(report[i] - report[i-1] <= -1))  isSafe = false;
        if(Math.abs(report[i] - report[i-1]) > 3 || Math.abs(report[i] - report[i-1]) < 1) isSafe = false;
        if(!isSafe && recalibrated === 0){
            isSafe = true;
            recalibrated++;
            badLevel = i;
            report = report.toSpliced(i,1);
            i=0;
        }
        if(!isSafe && recalibrated === 1){
            isSafe = true;
            recalibrated++;
            report = _report
            report = report.toSpliced(badLevel-1, 1)
            i=0;
        }
    }
    return isSafe
})
console.log(filtered.length) //634