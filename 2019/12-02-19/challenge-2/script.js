const puzzleInput = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,1,13,23,27,1,27,6,31,2,31,6,35,2,6,35,39,1,39,5,43,1,13,43,47,1,6,47,51,2,13,51,55,1,10,55,59,1,59,5,63,1,10,63,67,1,67,5,71,1,71,10,75,1,9,75,79,2,13,79,83,1,9,83,87,2,87,13,91,1,10,91,95,1,95,9,99,1,13,99,103,2,103,13,107,1,107,10,111,2,10,111,115,1,115,9,119,2,119,6,123,1,5,123,127,1,5,127,131,1,10,131,135,1,135,6,139,1,10,139,143,1,143,6,147,2,147,13,151,1,5,151,155,1,155,5,159,1,159,2,163,1,163,9,0,99,2,14,0,0];

function intcode(arr, noun, verb) {
	arr[1] = noun;
	arr[2] = verb;

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
			return arr[0];
		}else{return "Error invalid input";}
	}
}

function bruteIntcode(arr) {
	let noun = 0, verb = 0, target = 19690720;
	//loop through 0 to 99 for noun and verb to find which ones formulate position 0 as the targetted value
	for(noun = 0; noun <= 99; noun++) {
		for(verb = 0; verb <= 99; verb++) {
			//why must scope be so weird?
			arr = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,1,13,23,27,1,27,6,31,2,31,6,35,2,6,35,39,1,39,5,43,1,13,43,47,1,6,47,51,2,13,51,55,1,10,55,59,1,59,5,63,1,10,63,67,1,67,5,71,1,71,10,75,1,9,75,79,2,13,79,83,1,9,83,87,2,87,13,91,1,10,91,95,1,95,9,99,1,13,99,103,2,103,13,107,1,107,10,111,2,10,111,115,1,115,9,119,2,119,6,123,1,5,123,127,1,5,127,131,1,10,131,135,1,135,6,139,1,10,139,143,1,143,6,147,2,147,13,151,1,5,151,155,1,155,5,159,1,159,2,163,1,163,9,0,99,2,14,0,0];
			let value = intcode(arr, noun, verb);
			if(value === target) {
				return `Answer 19690720 was found with verb ${verb} and noun ${noun}, true answer is: ${(100 * noun) + verb}`;
			}
		}
	}
}
console.log(bruteIntcode(puzzleInput));