let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
input = input.replace(/\r/gi, "");//git replacing \n with these \r\n CLRF stuff is really getting on my nerves
input = input.replace(/\n/gi, "").split("mask = ");

let testInput = require("fs").readFileSync("../challenge-2/testInput.txt", {encoding: "utf-8", flag: 'r'}).trim();
testInput = testInput.replace(/\n/gi, "").split("mask = ");

function solve(input) {
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split("mem");
    }
    let items = {};
    for (let i = 0; i < input.length; i++) {
        for (let j = 1; j < input[i].length; j++) {
            let mask = input[i][0].split("");
            let binValue = Number(input[i][j].substr(input[i][j].indexOf("=") + 1));
            let mem = Number(input[i][j].substr(input[i][j].indexOf("[") + 1, input[i][j].indexOf("]") - 1)).toString(2);
            let binArr = mem.split("");
            while (binArr.length < mask.length) {
                binArr.unshift('0');
            }
            for (let k = 0; k < binArr.length; k++) {
                if (mask[k] === '1') {
                    binArr[k] = '1';
                } else if (mask[k] === 'X') {
                    binArr[k] = 'X';
                }
            }
            binArr = binaryToArrayOfPermutations(binArr);
            for (let k = 0; k < binArr.length; k++) {
                items[binArr[k]] = binValue;
            }
        }
    }
    let arr = Object.values(items);
    return arr.reduce((a, b) => {
        return a + b
    });
}

function binaryToArrayOfPermutations(bin) {
    if(typeof bin[0] !==  "object") {
        bin = [bin];
    }
    for(let i=0; i<bin[0].length;i++) {
        if(bin[0][i] === 'X'){
            let tempBin = arrayClone(bin);
            for(let j=0;j<bin.length;j++){
                bin[j][i] = '0';
                tempBin[j][i] = '1';
            }
            bin = bin.concat(tempBin);
        }
    }
    for(let i=0; i<bin.length;i++) {
        bin[i] = bin[i].join("");
        bin[i] = parseInt(bin[i], 2);
    }
    return bin
}

function arrayClone( arr ) {
    let i, copy;
    if( Array.isArray( arr ) ) {
        copy = arr.slice( 0 );
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = arrayClone( copy[ i ] );
        }
        return copy;
    } else if( typeof arr === 'object' ) {
        throw 'Cannot clone array containing an object!';
    } else {
        return arr;
    }
}

console.log(solve(input));