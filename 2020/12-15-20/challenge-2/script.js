let input = "0,13,16,17,1,10,6";
input = input.split(",");
let testInput = "0,3,6";
testInput = testInput.split(",");

let testInputTwo = "1,2,3";
testInputTwo = testInputTwo.split(",");
function solve(input, end) {

	let lastVal = input[0];
	let val = input[1];
	let lastValTurn = 0;
	let history = {};
	let needle = null;
	const getIndexByValue = (obj, value) =>
		Object.keys(obj).reverse().find(key => obj[key] === value);

	let callback = (value, key) => {
		if(value === lastVal) {
			needle = key
		}
	};
	for(let i = 1; i <= end+1; i++) {
		//if i is less than length of input, value is input at [i]
		if(i < input.length) {
			console.log(`spoken number on the ${i}th turn is ${lastVal}`);
			history[i] = Number(lastVal);
			val = Number(input[i]);
		} else {
			if(Object.values(history).indexOf(Number(lastVal)) > -1) {
				console.log(`spoken number on the ${i}th turn is ${lastVal}`);
				let prevInd = getIndexByValue(history, lastVal);
				val = lastValTurn - prevInd + 1;
				history[i] = lastVal;
			} else {
				console.log(`spoken number on the ${i}th turn is ${lastVal}`);
				val = 0;
				history[i] = lastVal;
			}
		}
		if(i === end){
			return lastVal;
		}
		lastVal = val;
		lastValTurn = i;

	}
}

console.log(solve(input, 2020));
//console.log(solve(input, 2020));