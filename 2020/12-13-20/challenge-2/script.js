let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\n/);

let testInput = [123123, "7,13,x,x,59,x,31,19"];
let leastCommonMultiple = (a, b) => {

	let gcd = (a, b) => {
		return !b ? a : gcd( b, a % b);
	};

	let lcm = (a, b) => {
		return (a * b) / gcd(a, b);
	};

	return lcm(a, b);
};

function solve(input) {
	input = input[1].split(',');
	let iter = 0;
	let reducer = (x, y) => {
		iter++;
		if(y === 'x'){
			return x;
		} else {
			return leastCommonMultiple(Number(x), Number(y), iter)
		}
	};
	return input.reduce(reducer);

}

console.log( solve(testInput));