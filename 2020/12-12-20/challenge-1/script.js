let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\n/);
console.log(input);
function solve(input) {
    let x = 0;
    let y = 0;
    let direction = 'E';
    for (let i = 0; i < input.length; i++) {
        let value = Number(input[i].substr(1));
        console.log(value);
        switch (input[i].substr(0, 1)) {
            case 'N':
                x = x + value;
                break;
            case 'S':
                x = x - value;
                break;
            case 'E':
                y = y + value;
                break;
            case 'W':
                y = y - value;
                break;
            case 'L':
                for(let j=0;j<value;j+=90){
                    switch (direction) {
                        case 'N':
                            direction = 'W';
                            break;
                        case 'S':
                            direction = 'E';
                            break;
                        case 'E':
                            direction = 'N';
                            break;
                        case 'W':
                            direction = 'S';
                            break;
                    }
                }
                break;
            case 'R':
                for(let j=0;j<value;j+=90){
                    switch (direction) {
                        case 'N':
                            direction = 'E';
                            break;
                        case 'S':
                            direction = 'W';
                            break;
                        case 'E':
                            direction = 'S';
                            break;
                        case 'W':
                            direction = 'N';
                            break;
                    }
                }
                break;
            case 'F':
                switch (direction) {
                    case 'N':
                        x = x + value;
                        break;
                    case 'S':
                        x = x - value;
                        break;
                    case 'E':
                        y = y + value;
                        break;
                    case 'W':
                        y = y - value;
                        break;
                }
                break;
        }
    }
    return Math.abs(x) + Math.abs(y);
}
console.log(solve(input));