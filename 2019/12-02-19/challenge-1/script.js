/**
 * This is challenge 1 of 2019-12-02 of Advent of Code's 25-day challenge
 *
 * @param arr intcode dataset
 * @returns {string} containing the value at position 0 of array when intcode program finishes
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */

function intcode(arr) {
	for(let i = 0; i < arr.length - 1; i) {
		//name redundant variables to make code easily read by humans
		let opcodeAddress = arr[i];
		let opcodeValueOne = arr[arr[i+1]];
		let opcodeValueTwo = arr[arr[i+2]];
		let opcodeTarget = arr[arr[i+3]];
		let nextOpcode = i + 4;
		let intcodeComplete = arr.length;
		//intcode logic - if opcode address is a value determining action, do said action
		//if address is one, add designated values in the next two positions or the array
		//apply the returned value to the position designated by the value of the 4th position in each intcode
		if(opcodeAddress === 1){
			arr[arr[i+3]] = opcodeValueOne + opcodeValueTwo;
			i = nextOpcode;
		}else if(opcodeAddress === 2) {
			//if address is two, multiply designated values in the next two positions or the array
			//apply the returned value to the position designated by the value of the 4th position in each intcode
			arr[arr[i+3]] = opcodeValueOne * opcodeValueTwo;
			i = nextOpcode;
		}else if(opcodeAddress === 99) {
			//if address is 99, intcode program is complete
			i = intcodeComplete;
			return `value at pos 0: ${arr[0]}`
		}else{return "Error invalid input";}
	}
}

let puzzleInput = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,1,13,23,27,1,27,6,31,2,31,6,35,2,6,35,39,1,39,5,43,1,13,43,47,1,6,47,51,2,13,51,55,1,10,55,59,1,59,5,63,1,10,63,67,1,67,5,71,1,71,10,75,1,9,75,79,2,13,79,83,1,9,83,87,2,87,13,91,1,10,91,95,1,95,9,99,1,13,99,103,2,103,13,107,1,107,10,111,2,10,111,115,1,115,9,119,2,119,6,123,1,5,123,127,1,5,127,131,1,10,131,135,1,135,6,139,1,10,139,143,1,143,6,147,2,147,13,151,1,5,151,155,1,155,5,159,1,159,2,163,1,163,9,0,99,2,14,0,0];
puzzleInput[1] = 12;
puzzleInput[2] = 2;
console.log(intcode(puzzleInput));