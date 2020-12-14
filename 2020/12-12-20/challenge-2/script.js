let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.replace(/\r/gi, "").split(/\n/);
function solve(input) {
    let waypointX = 10;
    let waypointY = 1;
    let shipX = 0;
    let shipY = 0;
    for (let i = 0; i < input.length; i++) {
        let value = Number(input[i].substr(1));
        switch (input[i].substr(0, 1)) {
            case 'N':
                waypointY = waypointY + value;
                break;
            case 'S':
                waypointY = waypointY - value;
                break;
            case 'E':
                waypointX = waypointX + value;
                break;
            case 'W':
                waypointX = waypointX - value;
                break;
            case 'L':
                for(let j=0;j<value;j+=90){
                    let temp = waypointX;
                    waypointX = 0 - waypointY;
                    waypointY = temp;
                }
                break;
            case 'R':
                for(let j=0;j<value;j+=90){
                    let temp = waypointY;
                    waypointY = 0 - waypointX;
                    waypointX = temp;
                }
                break;
            case 'F':
                    shipX = shipX + (waypointX * value);
                    shipY = shipY + (waypointY * value);
                break;
        }
    }
    return Math.abs(shipX) + Math.abs(shipY);
}
console.log(solve(input));