let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/[\r\n]/);
let testInput = require("fs").readFileSync("../challenge-1/testInput.txt", { encoding: "utf-8", flag: 'r'}).trim();
testInput = testInput.split(/[\n]/);
let testInputTwo = require("fs").readFileSync("../challenge-1/testInputTwo.txt", { encoding: "utf-8", flag: 'r'}).trim();
testInputTwo = testInputTwo.split(/[\n]/);


function solve(input) {
	input = input.sort( (a, b) => Number(a) - Number(b) );
	input.unshift('0'); //add the starting value to the array
	input.push(`${Number(input[input.length-1]) + 3}`); //add the ending value to the array
	let countArr = [1];
	let iterate = (index, joltDif) => (input[index - joltDif] >= (input[index] - 3) ) ? countArr[index - joltDif] : 0;
	for(let i=1;i<input.length;i++){
		let count = iterate(i, 1) + iterate(i, 2) + iterate(i, 3);
		countArr.push(count);
	}
	return countArr[countArr.length-1].toLocaleString('fullwide', {useGrouping:false});
}


console.log(solve(input));