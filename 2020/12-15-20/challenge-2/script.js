let input = "0,13,16,17,1,10,6";
input = input.split(",");

function solve(input, end) {
	let lastVal = input[0];
	let val = input[1];
	let lastValTurn = 0;
	let history = new Map();
	for(let i = 1; i <= end+1; i++) {
		if(i < input.length) {
			history.set(Number(lastVal), i);
			val = Number(input[i]);
		} else {
			if(history.has(Number(lastVal))) {
				let prevInd = history.get(lastVal);
				val = lastValTurn - prevInd + 1;
				history.set(Number(lastVal), i);
			} else {
				val = 0;
				history.set(Number(lastVal), i);
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