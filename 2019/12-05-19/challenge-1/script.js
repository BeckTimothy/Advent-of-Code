/**
 * This is challenge 1 of 2019-12-05 of Advent of Code's 25-day challenge
 * See the readme for an explanation
 *
 * @param arr
 * @returns int
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */

function intcode(arr) {
	//arr[1] = noun;
	//arr[2] = verb;

	for(let i = 0; i < arr.length - 1; i) {

		let opcodeValueOne = arr[arr[i+1]];
		let opcodeValueTwo = arr[arr[i+2]];
		let opcodeTarget = arr[arr[i+3]];
		let nextOpcode = i + 4;
		let intcodeComplete = arr.length;
		let storedValue = 1;

		//opcode address is the last digit of the first item in each instruction
		let opcodeAddress = Number(arr[i].toString().charAt(arr[i].toString().length - 1));
		let opParamHund = Number(arr[i].toString().charAt(arr[i].length - 3));
		let opParamThou = Number(arr[i].toString().charAt(arr[i].length - 4));
		let opParamTenThou = Number(arr[i].toString().charAt(arr[i].length - 5));

		if(opParamHund === 1) {
			opcodeValueOne = arr[i+1];
		}else{
			opcodeValueOne = arr[arr[i+1]];
		}
		if(opParamThou === 1) {
			opcodeValueTwo = arr[i+2];
		}else{
			opcodeValueTwo = arr[arr[i+2]];
		}

		//intcode logic - if opcode address is a value determining action, do said action
		//if address is one, add designated values in the next two positions or the array
		//apply the returned value to the position designated by the value of the 4th position in each intcode
		if(opcodeAddress === 1){
			/*if(opParamTenThou === 1) {
				arr[i+3] = opcodeValueOne + opcodeValueTwo;
			}else{
				arr[arr[i+3]] = opcodeValueOne + opcodeValueTwo;
			}*/

			arr[arr[i+3]] = opcodeValueOne + opcodeValueTwo;
			i = nextOpcode;
		}else if(opcodeAddress === 2) {
			//if address is two, multiply designated values in the next two positions or the array
			//apply the returned value to the position designated by the value of the 4th position in each intcode
			console.log(arr[i], opcodeAddress, arr[i].toString(), Number(arr[i].toString().charAt(arr[i].toString().length - 1)));
			/*if(opParamTenThou === 1) {
				arr[i+3] = opcodeValueOne * opcodeValueTwo;
			}else{
				arr[arr[i+3]] = opcodeValueOne * opcodeValueTwo;
			}*/
			arr[arr[i+3]] = opcodeValueOne * opcodeValueTwo;
			i = nextOpcode;
		}else if(Number(arr[i].toString().slice(arr[i].length - 2)) === 99) {
			//if address is 99, intcode program is complete
			i = intcodeComplete;
			return `value at pos 0: ${arr[0]}`
		}else if(opcodeAddress === 3) {
			//outputs the stored value at the index of its parameter's value
			if(opParamHund === 1) {
				arr[i+1] = storedValue;
			}else{
				arr[arr[i+1]] = storedValue;
			}
			i = i + 2;
		}else if(opcodeAddress === 4) {
			//logs the parameter
			if(opParamHund === 1) {
				console.log(arr[i+1]);
			}else{
				console.log(arr[arr[i+1]]);
			}
			i = i + 2;
		}else if(opcodeAddress === 0) {
			i = i + 1;
		}else{return "Error invalid input";}
	}
}

let testInput = [1002,4,3,4,33];
console.log(intcode(testInput));