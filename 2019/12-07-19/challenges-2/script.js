/**
 * This is challenge 2 of 2019-12-07 of Advent of Code's 25-day challenge
 * See the readme for an explanation
 *
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */
function bruteCircuit(arr) {
	let thruster = 0;
	let sequence = "";
	for(a = 0; a <= 4; a++) {
		for(b = 0; b <= 4; b++) {
			for(c = 0; c <= 4; c++) {
				for(d = 0; d <= 4; d++) {
					for(e = 0; e <= 4; e++) {
						for(f = 5; f <= 9; f++){
							for(g = 5; g <= 9; g++){
								for(h = 5; h <= 9; h++){
									for(k = 5; k <= 9; k++){
										for(l = 5; l <= 9; l++){
											if(a === b || a === c || a === d || a === e || b === c || b === d || b === e || c === d || c === e || d === e || f === g || f === h || f === k || f === l || g === h || g === k || g === l || h === k || h === l || k === l) {
												continue;
											}
											console.log(`Thruster output: ${thruster} with Sequence:  a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}, f = ${f}, g = ${g}, h = ${h}, k = ${k}, l = ${l}`);
											if(ampCircuitExtended(arr, a, b, c, d, e, f, g, h, k, l) > thruster) {
												thruster = ampCircuitExtended(arr, a, b, c, d, e, f, g, h, k, l);
												sequence = `Sequence: a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}, f = ${f}, g = ${g}, h = ${h}, k = ${k}, l = ${l}`;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return `Thruster output: ${thruster} with ` + sequence;
}

function ampCircuitExtended(arr, a, b, c, d, e, f, g, h, k, l) {
	let ins1 = arr;
	let ins2 = arr;
	let ins3 = arr;
	let ins4 = arr;
	let ins5 = arr;
	let ins6 = arr;
	let ins7 = arr;
	let ins8 = arr;
	let ins9 = arr;
	let ins0 = arr;

	const ampA = intcode(ins1, a, 0);
	const ampB = intcode(ins2, b, ampA);
	const ampC = intcode(ins3, c, ampB);
	const ampD = intcode(ins4, d, ampC);
	const ampE = intcode(ins5, e, ampD);
	const ampF = intcode(ins6, f, ampE);
	const ampG = intcode(ins7, g, ampF);
	const ampH = intcode(ins8, h, ampG);
	const ampK = intcode(ins9, k, ampH);
	const ampL = intcode(ins0, l, ampK);

	return ampL;
}

function intcode(arr, phaseSetting, input) {
	//arr[1] = noun;
	//arr[2] = verb;
	let phaseCount = 0;
	for(let i = 0; i <= arr.length - 1; i) {
		//console.log(i);
		//console.log(`i = ${i} and last value = ${Number(arr[i].toString().charAt(arr[i].toString().length - 1))}`);
		let opcodeValueOne = arr[arr[i + 1]];
		let opcodeValueTwo = arr[arr[i + 2]];
		let nextOpcode = i + 4;
		let intcodeComplete = arr.length;

		//opcode address is the last digit of the first item in each instruction
		let opcodeAddress = Number(arr[i].toString().slice(-2));
		//these variables store the instruction parameters
		let opParamHund = Number(arr[i].toString().charAt(arr[i].toString().length - 3));
		let opParamThou = Number(arr[i].toString().charAt(arr[i].toString().length - 4));

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
		} else if(opcodeAddress === 99) {
			console.log(`i = ${i} and arr[0] = ${arr[0]} at the end of the loop`);
			i = intcodeComplete;
			return `value at pos 0: ${arr[0]}`;
		} else if(opcodeAddress === 3) {
			//outputs the stored value at the index of its parameter's value
			if(opParamHund === 1) {
				if(phaseCount === 0){
					arr[i + 1] = phaseSetting;
					phaseCount = 1;
				}else{
					arr[i + 1] = input
				}
			} else {
				if(phaseCount === 0){
					arr[arr[i + 1]] = phaseSetting;
					phaseCount = 1;
				}else{
					arr[arr[i + 1]] = input
				}
			}
			i = i + 2;
		} else if(opcodeAddress === 4) {
			//logs the parameter
			if(opParamHund === 1) {
				return Number(arr[i + 1]);
			} else {
				return Number(arr[arr[i + 1]]);
			}
		} else if(opcodeAddress === 5) {
			//logs the parameter
			if(opcodeValueOne !== 0) {
				i = opcodeValueTwo;
			} else {
				i = i + 3
			}
		} else if(opcodeAddress === 6) {
			//logs the parameter
			if(opcodeValueOne === 0) {
				i = opcodeValueTwo;
			} else {
				i = i + 3
			}
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

let testInput2 = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
//console.log(intcode(testInput2, 5, 5)); //should be 999

const testInput = [3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0];
//console.log(ampCircuit(testInput, 0, 1,2,3,4)); //should be 54321

//console.log(intcode(testInput, 0, 0));
//console.log(intcode(testInput, 1, 23));
let puzzleInput = [3,8,1001,8,10,8,105,1,0,0,21,42,67,84,109,122,203,284,365,446,99999,3,9,1002,9,3,9,1001,9,5,9,102,4,9,9,1001,9,3,9,4,9,99,3,9,1001,9,5,9,1002,9,3,9,1001,9,4,9,102,3,9,9,101,3,9,9,4,9,99,3,9,101,5,9,9,1002,9,3,9,101,5,9,9,4,9,99,3,9,102,5,9,9,101,5,9,9,102,3,9,9,101,3,9,9,102,2,9,9,4,9,99,3,9,101,2,9,9,1002,9,3,9,4,9,99,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,99];
console.log(bruteCircuit(puzzleInput));