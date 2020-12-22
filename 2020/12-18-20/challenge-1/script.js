let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\n/);
const parseParen = (algStr) => {
    if(algStr.indexOf(")") < 0){
        return Number(innerCalc(algStr));
    }
    let beginning = null;
    let ending = null;
    let closer = algStr.indexOf(")")+1;
    let opener = closer - algStr.substr(0, closer).split('').reverse().indexOf("(") - 1;
    if(opener > 0) {
        beginning = algStr.substr(0, opener);
    }
    if(closer < algStr.length) {
        ending = algStr.substr(closer);
    }
    let solveFor = algStr.substring(opener + 1, closer - 1);
    solveFor = innerCalc(solveFor);
    if(beginning !== null){
        solveFor = `${beginning}${solveFor}`;
    }
    if(ending !== null){
        solveFor = `${solveFor}${ending}`;
    }
    if(!Number(solveFor) > -1){
        return parseParen(solveFor);
    }
};
const innerCalc = (solveStr) => {
    let solveForRegEx = /(\d+) [+\-*] (\d+)/;
    let solver = solveForRegEx.exec(solveStr)[0];
    solveStr = solveStr.replace(solveForRegEx, eval(solver));
    if(Number(solveStr) > -1){
        return solveStr;
    } else {
        return innerCalc(solveStr);
    }
};
function solve(input) {
    return input.reduce((x,y) => {return x + parseParen(y)}, 0);
}
console.log(solve(input));