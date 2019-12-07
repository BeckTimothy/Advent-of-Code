/**
 * This is a refactored version of my submission for challenge 2 of 2019-12-05 of Advent of Code's 25-day challenge
 * See the readme for an explanation of the challenge objective
 *
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */

function intcode(arr) {
	for(let i = 0; i <= arr.length - 1; i) {
		console.log(arr[i]);
		let opcodeValueOne = arr[arr[i + 1]];
		let opcodeValueTwo = arr[arr[i + 2]];
		let nextOpcode = i + 4;
		let intcodeComplete = arr.length;
		let storedValue = 5;

		//opcode address is the last digit of the first item in each instruction
		let opcodeAddress = Number(arr[i].toString().slice(-2));

		//these variables store the instruction's parameter mode indicators, from the optional hundreds and thousands digits of the opcode address
		let opParamHund = Number(arr[i].toString().charAt(arr[i].toString().length - 3));
		let opParamThou = Number(arr[i].toString().charAt(arr[i].toString().length - 4));

		//switches change the parameter mode based off the parameter mode indicators
		switch(opParamHund === 1) {
			case "true":
				opcodeValueOne = arr[i + 1];
				break;
			case "false":
				opcodeValueOne = arr[arr[i + 1]];
				break;
		}
		switch(opParamThou === 1) {
			case "true":
				opcodeValueTwo = arr[i + 2];
				break;
			case "false":
				opcodeValueTwo = arr[arr[i + 2]];
				break;
		}

		//switches output the proper instructions based off the opcode, from the ones and tens digits of the opcode address
		switch(opcodeAddress) {
			case 0:
				i = i + 1;
				break;
			case 1:
				arr[arr[i + 3]] = opcodeValueOne + opcodeValueTwo;
				i = nextOpcode;
				break;
			case 2:
				arr[arr[i + 3]] = opcodeValueOne * opcodeValueTwo;
				i = nextOpcode;
				break;
			case 3:
				switch(opParamHund === 1) {
					case "true":
						arr[i + 1] = storedValue;
						i = i + 2;
						break;
					case "false":
						arr[arr[i + 1]] = storedValue;
						i = i + 2;
						break;
				}
				break;
			case 4:
				switch(opParamHund === 1) {
					case "true":
						console.log(`diagnostic code: ${arr[i + 1]}`);
						return;
					case "false":
						console.log(`diagnostic code: ${arr[arr[i + 1]]}`);
						return;
				}
			case 5:
				switch(opcodeValueOne !== 0) {
					case "true":
						i = opcodeValueTwo;
						break;
					case "false":
						i = i + 3;
						break;
				}
				break;
			case 6:
				switch(opcodeValueOne === 0) {
					case "true":
						i = opcodeValueTwo;
						break;
					case "false":
						i = i + 3;
						break;
				}
				break;
			case 7:
				switch(opcodeValueOne < opcodeValueTwo) {
					case "true":
						arr[arr[i + 3]] = 1;
						i = i + 4;
						break;
					case "false":
						arr[arr[i + 3]] = 0;
						i = i + 4;
						break;
				}
				break;
			case 8:
				switch(opcodeValueOne === opcodeValueTwo) {
					case "true":
						arr[arr[i + 3]] = 1;
						i = i + 4;
						break;
					case "false":
						arr[arr[i + 3]] = 0;
						i = i + 4;
						break;
				}
				break;
			case 99:
				i = intcodeComplete;
				break;
			case "false":
				return "Error invalid input";
		}
	}
}

let puzzleInput = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 1001, 152, 55, 224, 1001, 224, -68, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 4, 224, 1, 224, 223, 223, 1101, 62, 41, 225, 1101, 83, 71, 225, 102, 59, 147, 224, 101, -944, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 3, 224, 224, 1, 224, 223, 223, 2, 40, 139, 224, 1001, 224, -3905, 224, 4, 224, 1002, 223, 8, 223, 101, 7, 224, 224, 1, 223, 224, 223, 1101, 6, 94, 224, 101, -100, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 6, 224, 224, 1, 224, 223, 223, 1102, 75, 30, 225, 1102, 70, 44, 224, 101, -3080, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 4, 224, 1, 223, 224, 223, 1101, 55, 20, 225, 1102, 55, 16, 225, 1102, 13, 94, 225, 1102, 16, 55, 225, 1102, 13, 13, 225, 1, 109, 143, 224, 101, -88, 224, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 2, 224, 1, 223, 224, 223, 1002, 136, 57, 224, 101, -1140, 224, 224, 4, 224, 1002, 223, 8, 223, 101, 6, 224, 224, 1, 223, 224, 223, 101, 76, 35, 224, 1001, 224, -138, 224, 4, 224, 1002, 223, 8, 223, 101, 5, 224, 224, 1, 223, 224, 223, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 1008, 677, 677, 224, 1002, 223, 2, 223, 1006, 224, 329, 1001, 223, 1, 223, 8, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 344, 101, 1, 223, 223, 1107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 359, 1001, 223, 1, 223, 1108, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 374, 1001, 223, 1, 223, 1007, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 389, 1001, 223, 1, 223, 108, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 404, 1001, 223, 1, 223, 1007, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 419, 1001, 223, 1, 223, 8, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 434, 101, 1, 223, 223, 1008, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 449, 1001, 223, 1, 223, 7, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 464, 1001, 223, 1, 223, 8, 226, 226, 224, 1002, 223, 2, 223, 1005, 224, 479, 1001, 223, 1, 223, 7, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 494, 1001, 223, 1, 223, 7, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 509, 101, 1, 223, 223, 107, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 524, 101, 1, 223, 223, 1007, 677, 226, 224, 102, 2, 223, 223, 1006, 224, 539, 101, 1, 223, 223, 107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 554, 101, 1, 223, 223, 1008, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 569, 1001, 223, 1, 223, 1107, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 584, 101, 1, 223, 223, 1107, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 599, 101, 1, 223, 223, 1108, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 614, 101, 1, 223, 223, 108, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 629, 101, 1, 223, 223, 107, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 644, 1001, 223, 1, 223, 1108, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 659, 101, 1, 223, 223, 108, 226, 226, 224, 102, 2, 223, 223, 1005, 224, 674, 101, 1, 223, 223, 4, 223, 99, 226];
console.log(intcode(puzzleInput));