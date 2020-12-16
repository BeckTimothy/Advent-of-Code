let input = "0,13,16,17,1,10,6";
input = input.split(",");

function solve(input, end) {
	let lastVal = input[0];
	let val = input[1];
	let lastValTurn = 0;
	let history = {};
	const getIndexByValue = (obj, value) =>
		Object.keys(obj).reverse().find(key => obj[key] === value);
	for(let i = 1; i <= end+1; i++) {
		if(i < input.length) {
			history[i] = Number(lastVal);
			val = Number(input[i]);
		} else {
			if(Object.values(history).indexOf(Number(lastVal)) > -1) {
				let prevInd = getIndexByValue(history, lastVal);
				val = lastValTurn - prevInd + 1;
				history[i] = lastVal;
			} else {
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
console.log(solve(input, 30000000));