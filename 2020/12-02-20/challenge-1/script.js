const fs = require('fs');
let input = fs.readFileSync('../challenge-2/input.txt');
input = input.toString().split('\n');

function solve(input) {
	let answerArr = [];
	for(let i = 0; i < input.length; i++) {
		input[i] = input[i].replace(/\s/gi, ""); //remove white space
		//WATCH ME OVERENGINEER THE FUCK OUT OF THIS USING THE HYPHEN AND COLON IN THE STRING TO DETERMINE WHERE ALL MY VARIABLES ARE
		let lowLimit = Number(input[i].substr(0, input[i].indexOf("-")));
		let highLimit = Number(input[i].substr(input[i].indexOf("-") + 1, input[i].indexOf(":") - 2 - input[i].indexOf("-")));
		let needle = input[i].substr(input[i].indexOf(":") - 1, 1);
		let pass = input[i].substr(input[i].indexOf(":") + 1);
		let count = pass.match(new RegExp(needle, 'gi'));
		count !== null ? count = count.length : count = 0; //if match returns null array, needle wasn't found in password.
		if(lowLimit <= count && count <= highLimit) {
			answerArr.push(pass);
		}
	}
	return answerArr.length;
}
console.log(solve(input));