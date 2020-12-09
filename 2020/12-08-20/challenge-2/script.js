let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
input = input.split("\n");

function solve(input, k) {
    let accumulator = 0;
    let tracker = new Set();
    for (let i = 0; i < input.length; i) {
        let ins = input[i].split(" ")[0];
        let arg = input[i].split(" ")[1];
        if (tracker.has(i)) {
            return null;
        } else {
            tracker.add(i);
        }
        if (k === i && ins === "jmp") {
            ins = "nop"
        } else if (k === i && ins === "nop") {
            ins = "jmp"
        }
        switch (ins) {
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
            default:
                return "default error";
        }
        if (i === input.length - 1) {
            return accumulator
        }
    }
}

let solver = (input) => {
    for (let k = 0; k <= input.length; k++) {
        if (typeof solve(input, k) === "number") {
            return solve(input, k)
        }
    }
};
console.log(solver(input));