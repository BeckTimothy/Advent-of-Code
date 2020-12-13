let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\n/);
console.log(input);
function solve(input) {
    let wpX = 10;
    let wpY = 1;
    let shX = 0;
    let shY = 0;
    for (let i = 0; i < input.length; i++) {
        let value = Number(input[i].substr(1));
        console.log(value);
        switch (input[i].substr(0, 1)) {
            case 'N':
                wpY = wpY + value;
                break;
            case 'S':
                wpY = wpY - value;
                break;
            case 'E':
                wpX = wpX + value;
                break;
            case 'W':
                wpX = wpX - value;
                break;
            case 'L':
                for(let j=0;j<value;j+=90){
                    let temp = wpX;
                    wpX = 0 - wpY;
                    wpY = temp;
                }
                break;
            case 'R':
                for(let j=0;j<value;j+=90){
                    let temp = wpY;
                    wpY = 0 - wpX;
                    wpX = temp;
                }
                break;
            case 'F':
                    shX = shX + (wpX * value);
                    shY = shY + (wpY * value);
                break;
        }
    }
    return Math.abs(shX) + Math.abs(shY);
}
console.log(solve(input));