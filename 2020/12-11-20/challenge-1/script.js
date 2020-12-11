let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\n/);
for(let i=0; i < input.length; i++) {
    input[i] = input[i].split('');
}
function solve(input) {
    let tempArr = input;
    let n = null;
    let s = null;
    let e = null;
    let w = null;
    let ne = null;
    let nw = null;
    let se = null;
    let sw = null;
    for(let i=0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {

            (i > 0) ? n = input[i-1][j] : n = null;
            (i > 0 && j < input[i].length-1) ? ne = input[i-1][j+1] : ne = null;
            (i > 0 && j > 0) ? nw = input[i-1][j-1] : nw = null;
            (i < input.length-1) ? s = input[i+1][j] : s = null;
            (i < input.length-1 && j>0) ? sw = input[i+1][j-1] : sw = null;
            (i < input.length-1 && j<input[i].length-1) ? se = input[i+1][j+1] : se = null;
            (j > 0) ? w = input[i][j-1] : w = null;
            (j < input[i].length-1) ? e = input[i][j+1] : e = null;
            let rose = [n,s,e,w,se,sw,nw,ne];
            let sittingCount = 0;
            let emptyCount = 0;
            for (let k=0;k<rose.length;k++){
                if (rose[k] === 'L'){
                    emptyCount++
                }else if(rose[k] === '#'){
                    sittingCount++
                }

            }
            if(input[i][j] === 'L' && sittingCount === 0){
                tempArr[i][j] = '#';
            }
            if(input[i][j] === '#' && sittingCount >= 4){
                tempArr[i][j] = 'L';
            }
        }
    }
    if(tempArr === input){
        return tempArr;
    } else{
        let answer = solve(tempArr);
        for(let k=0;k<answer.length;k++){
            answer[k] = answer[k].join('')
        }
        answer = answer.join('');
        let counter = 0;
        for(let k=0;k<answer.length;k++){
            if(answer[k] === '#'){
                counter++;
            }
        }
        return counter;
    }
}

console.log(solve(input));