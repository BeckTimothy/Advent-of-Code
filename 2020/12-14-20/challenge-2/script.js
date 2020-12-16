let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
input = input.replace(/\n/gi, "").split("mask = ");
function solve(input) {
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split("mem");
    }
    let items = {};
    for (let i = 0; i < input.length; i++) {
        for (let j = 1; j < input[i].length; j++) {
            let mask = input[i][0].split("");

            let binValue = Number(input[i][j].substr(input[i][j].indexOf("=") + 1)).toString(2);

            let mem = Number(input[i][j].substr(input[i][j].indexOf("[") + 1, input[i][j].indexOf("]") - 1));

            let binArr = binValue.split("");

            while (binArr.length < mask.length) {
                binArr.unshift('0');
            }

            let exp = 0; //power used to determine the number of array items at the memory address
            for (let k = 0; k < binArr.length; k++) {
                if (mask[k] === '1') {
                    binArr[k] = '1';
                } else if (mask[k] === 'X') {
                    binArr[k] = 'X';
                    exp++;
                }
            }



            items[mem] = parseInt(binArr.join(''), 2);
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
    let xInd = bin[0].findIndex((x) => x === 'X');
    for(let i=0; i<bin[0].length;i++) {


    }

}
console.log(solve(input));