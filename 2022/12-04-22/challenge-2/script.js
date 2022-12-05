const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
input = input.map(x=>{
    x = x.split(',').map(x => x.split("-").map(z=>Number(z)))
    return x
})
let count = 0
input = input.filter((x) => {
    let xOne = x[0][0], xTwo = x[0][1], yOne = x[1][0], yTwo = x[1][1];
    let does_X_Overlap_Y_At_Xs_Second_Value = (xOne <= yOne && xTwo >= yOne);
    let does_X_Overlap_Y_At_Xs_First_Value = (xOne <= yTwo && xTwo >= yTwo);
    let does_X_Contain_All_Values_In_Y = (xOne <= yOne && xTwo >= yTwo);
    let does_Y_Contain_All_Values_In_X = (xOne >= yOne && xTwo <= yTwo);
    let doTheyOverlap = (
        does_Y_Contain_All_Values_In_X
        || does_X_Contain_All_Values_In_Y
        || does_X_Overlap_Y_At_Xs_First_Value
        || does_X_Overlap_Y_At_Xs_Second_Value
    );
    if ( doTheyOverlap ) count++
})
console.log(count);