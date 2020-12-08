let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split("\n");

function solve(input) {
    let accumulator = 0;
    let tracker = new Set();
    for(let i=0;i<input.length;i) {
        let ins = input[i].split(" ")[0];
        let arg = input[i].split(" ")[1];
        if(tracker.has(i)){
            return accumulator;
        } else{
            tracker.add(i);
        }
        switch(ins){
            case "acc":
                accumulator = accumulator + Number(arg);
                i++;
                break;
            case "jmp":
                i = i + Number(arg);
                break;
            case "nop":
                i++;
                break;
            default: console.log("default err");
        }
    }
}
console.log(solve(input));