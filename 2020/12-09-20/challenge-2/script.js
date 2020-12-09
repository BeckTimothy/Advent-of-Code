let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\r\n/);
function solve(input) {
	let addArr = [];
	addArr.push(Number(input[0]));
	addArr.push(Number(input[1]));
	let needle = Number(findInvalidNum(input, 25));
	for(let i=2;i<input.length;i++) {
		if(addArr.reduce( (a,b) => Number(a) + Number(b)) > needle) {
			if(addArr.length > 2){
				addArr.shift();
				i--;
			}else{
				addArr.shift();
				addArr.push(Number(input[i]));
			}
		} else if(addArr.reduce( (a,b) => Number(a) + Number(b)) === needle){
			return Math.min(...addArr) + Math.max(...addArr);
		} else{
			addArr.push(Number(input[i]));
		}
	}
}
function findInvalidNum(input, pointerLen) {
	let pointerArr = [];
	for(let i=0;i<pointerLen-1;i++){
		pointerArr.push(input[i]);
	}
	//initialize pointer arr starting positions
	for(let i=pointerLen; i < input.length; i++){
		//use push and shift to move pointer array along the array of inputs.
		pointerArr.push(input[i]);
		if(pointerArr.length > pointerLen){
			pointerArr.shift();
		}
		if(typeof findNeedle(pointerArr, Number(input[i+1])) === 'number') {
			return findNeedle(pointerArr, Number(input[i+1]));
		}
	}
}
function findNeedle(arr, needle) {
	let foundVal = false;
	for(let j=0; j<arr.length; j++) {
		for(let k=0; k<arr.length; k++) {
			if( needle === Number(arr[j]) + Number(arr[k]) && j !== k){
				foundVal = true;
			}
		}
	}
	if(!foundVal) {
		return needle;
	}
}
console.log(solve(input));