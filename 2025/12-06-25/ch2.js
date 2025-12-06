const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'});
//input = "123 328  51 64 \n" +
//        " 45 64  387 23 \n" +
//        "  6 98  215 314\n" +
//        "*   +   *   +  "
input = input.toString().split('\n');
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let lengthCount = 1;
for(let i=1; i<=input[4].length; i++){
    if( input[4][i] === "*" || input[4][i] === "+" ){
        arr1.push(input[0].substr(lengthCount-1,(i-(lengthCount))))
        arr2.push(input[1].substr(lengthCount-1,(i-(lengthCount))))
        arr3.push(input[2].substr(lengthCount-1,(i-(lengthCount))))
        arr4.push(input[3].substr(lengthCount-1,(i-(lengthCount))))
        arr5.push(input[4].substr(lengthCount-1,(i-(lengthCount))).trim())
        lengthCount = i
    }
    if( i===input[4].length ){
        arr1.push(input[0].substr(lengthCount-1,(i-(lengthCount-2))))
        arr2.push(input[1].substr(lengthCount-1,(i-(lengthCount-2))))
        arr3.push(input[2].substr(lengthCount-1,(i-(lengthCount-2))))
        arr4.push(input[3].substr(lengthCount-1,(i-(lengthCount-2))))
        arr5.push(input[4].substr(lengthCount-1,(i-(lengthCount-1))).trim())
        lengthCount = i
    }
}

let count = 0;
for(let i=0; i<arr1.length; i++){
    if(arr5[i] === '*'){
        let multCount = 1;
        for(let j=0; j<arr1[i].length; j++){
            let temp = arr1[i].charAt(j) + arr2[i].charAt(j) + arr3[i].charAt(j) + arr4[i].charAt(j)
            console.log(arr1[i].charAt(j) + arr2[i].charAt(j) + arr3[i].charAt(j) + arr4[i].charAt(j))
            if(temp.trim() !== ''){
                multCount *= Number(temp); //
            }

        }
        console.log(multCount)
        count += multCount
    } else{
        let multCount = 0
        for(let j=0; j<arr1[i].length; j++){
            console.log(arr1[i].charAt(j) + arr2[i].charAt(j) + arr3[i].charAt(j) + arr4[i].charAt(j))
            multCount += Number(arr1[i].charAt(j) + arr2[i].charAt(j) + arr3[i].charAt(j) + arr4[i].charAt(j) )
        }
        console.log(multCount)
        count += multCount
    }
}
console.log(count)