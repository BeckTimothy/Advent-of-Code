let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\n/);

let testInput = [123123, "7,13,x,x,59,x,31,19"];
let leastCommonMultiple = (a, b) => {

	let gcd = (a, b) => {
		return !b ? a : gcd(b, a % b);
	};

	let lcm = (a, b) => {
		return (a * b) / gcd(a, b);
	};

	return lcm(a, b);
};
function solve(input) {

	let iter = 0;
	let reducer = (x, y) => {
		iter++;
		if(y === 'x') {
			return x;
		} else {
			return leastCommonMultiple(Number(x), Number(y), iter)
		}
	};
	return input.reduce(reducer);

}

function solveSmart(input) {
	input = input[1].split(',');
	let cycleLength = Number(input[0]);
	let baseline = 0;
	for(let i = 1; i < input.length; i++) {
		if(input[i] !== 'x') {
			while(((baseline + i) % Number(input[i])) !== 0) {
				baseline += cycleLength;
			}
			cycleLength *= Number(input[i]);
		}
	}
	return baseline;
}
console.log(solveSmart(input));