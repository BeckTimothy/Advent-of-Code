let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/[\r\n]/);

function solve(input) {
	input = input.sort( (a, b) => Number(a) - Number(b) );
	input.unshift('0'); //add the starting value to the array
	input.push(`${Number(input[input.length-1]) + 3}`); //add the ending value to the array
	let countArr = [Big(1)];
	let iterate = (index, joltDif) => (input[index - joltDif] >= (input[index] - 3) ) ? Number(countArr[index - joltDif]) : 0;
	for(let i=1;i<input.length;i++){
		let count = iterate(i, 1) + iterate(i, 2) + iterate(i, 3);
		countArr.push(count);
	}
	return countArr[countArr.length-1];
}
console.log(solve(input));