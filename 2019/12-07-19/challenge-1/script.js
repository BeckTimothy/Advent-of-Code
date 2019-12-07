/**
 * This is challenge 1 of 2019-12-07 of Advent of Code's 25-day challenge
 * See the readme for an explanation
 *
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */

function intcode(arr) {
	//arr[1] = noun;
	//arr[2] = verb;

	for(let i = 0; i <= arr.length - 1; i) {
		console.log(i);
		//console.log(`i = ${i} and last value = ${Number(arr[i].toString().charAt(arr[i].toString().length - 1))}`);
		let opcodeValueOne = arr[arr[i + 1]];
		let opcodeValueTwo = arr[arr[i + 2]];
		let opcodeTarget = arr[arr[i + 3]];
		let nextOpcode = i + 4;
		let intcodeComplete = arr.length;
		let storedValue = 5;

		//opcode address is the last digit of the first item in each instruction
		let opcodeAddress = Number(arr[i].toString().slice(-2));
		//these variables store the instruction parameters
		let opParamHund = Number(arr[i].toString().charAt(arr[i].toString().length - 3));
		let opParamThou = Number(arr[i].toString().charAt(arr[i].toString().length - 4));
		let opParamTenThou = Number(arr[i].toString().charAt(arr[i].toString().length - 5));

		if(opParamHund === 1) {
			opcodeValueOne = arr[i + 1];
		} else {
			opcodeValueOne = arr[arr[i + 1]];
		}
		if(opParamThou === 1) {
			opcodeValueTwo = arr[i + 2];
		} else {
			opcodeValueTwo = arr[arr[i + 2]];
		}

		//intcode logic - if opcode address is a value determining action, do said action
		//if address is one, add designated values in the next two positions or the array
		//apply the returned value to the position designated by the value of the 4th position in each intcode
		if(opcodeAddress === 1) {
			arr[arr[i + 3]] = opcodeValueOne + opcodeValueTwo;
			i = nextOpcode;
		} else if(opcodeAddress === 2) {
			arr[arr[i + 3]] = opcodeValueOne * opcodeValueTwo;
			i = nextOpcode;
			//console.log(`pointer: ${i}, address: ${opcodeAddress}, arr0 ${arr[0]}, arr2 ${arr[1]}, arr2 ${arr[2]}, arr03 ${arr[3]}, arr04 ${arr[4]}`);
		} else if(opcodeAddress === 99) {
			//if address is 99, intcode program is complete
			//console.log(`i = ${i} and arr[0] = ${arr[0]} at the end of the loop`);
			i = intcodeComplete;
			return `value at pos 0: ${arr[0]}`
		} else if(opcodeAddress === 3) {
			//outputs the stored value at the index of its parameter's value
			if(opParamHund === 1) {
				arr[i + 1] = storedValue;
			} else {
				arr[arr[i + 1]] = storedValue;
			}
			i = i + 2;
		} else if(opcodeAddress === 4) {
			//logs the parameter
			if(opParamHund === 1) {
				console.log(`diagnostic code: ${arr[i + 1]}`);
			} else {
				console.log(`diagnostic code: ${arr[arr[i + 1]]}`);
			}
			i = i + 2;
		} else if(opcodeAddress === 5) {
			//logs the parameter
			if(opcodeValueOne !== 0) {
				i = opcodeValueTwo;
			}else{i=i+3}
		} else if(opcodeAddress === 6) {
			//logs the parameter
			if(opcodeValueOne === 0) {
				i = opcodeValueTwo;
			}else{i=i+3}
		} else if(opcodeAddress === 7) {
			//logs the parameter
			if(opcodeValueOne < opcodeValueTwo) {
				arr[arr[i + 3]] = 1;
				i = i + 4;
			} else {
				arr[arr[i + 3]] = 0;
				i = i + 4;
			}
		} else if(opcodeAddress === 8) {
			//logs the parameter
			if(opcodeValueOne === opcodeValueTwo) {
				arr[arr[i + 3]] = 1;
				i = i + 4;
			} else {
				arr[arr[i + 3]] = 0;
				i = i + 4;
			}
		} else if(opcodeAddress === 0) {
			i = i + 1;
		} else {
			return "Error invalid input";
		}
	}
}