<?php
/**
 * This is challenge 2 of 2019-12-02 of Advent of Code's 25-day challenge done in PHP.
 *
 * @param array intcode dataset
 * @returns {string} containing the needed parameters to return a specified value at position 0 of array when intcode program finishes
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */
function bruteIntcode($array) {
	//noun and verb are array item 1 and 2, that modify what the first opcode instruction does and changes the intcode program's output
	$noun = 0;
	$verb = 0;
	//target is the output we are bruteforcing the intcode program for
	$target = 19690720;

	//loop though all possible verbs and nouns until we find the targetted output
	for($noun = 0; $noun <= 99; $noun = $noun + 1) {
		for($verb = 0; $verb <= 99; $verb = $verb + 1) {
			//array is the puzzle input
			$array = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,1,13,23,27,1,27,6,31,2,31,6,35,2,6,35,39,1,39,5,43,1,13,43,47,1,6,47,51,2,13,51,55,1,10,55,59,1,59,5,63,1,10,63,67,1,67,5,71,1,71,10,75,1,9,75,79,2,13,79,83,1,9,83,87,2,87,13,91,1,10,91,95,1,95,9,99,1,13,99,103,2,103,13,107,1,107,10,111,2,10,111,115,1,115,9,119,2,119,6,123,1,5,123,127,1,5,127,131,1,10,131,135,1,135,6,139,1,10,139,143,1,143,6,147,2,147,13,151,1,5,151,155,1,155,5,159,1,159,2,163,1,163,9,0,99,2,14,0,0];
			$value = intcodeProgram($array, $noun, $verb);
			if($value === $target) {
				//answer is the puzzles answer obtained by multiplying 100 and the noun, added to the verb if they output our target
				$answer = (100 * $noun) + $verb;
				return "Answer 19690720 was found with verb $verb and noun $noun, true answer is: $answer";
				}
			}
		}
	}


function intcodeProgram($array, $noun, $verb) {
	//noun and verb are array item 1 and 2, that modify what the first opcode instruction does and changes the intcode program's output
	$array[1] = $noun;
	$array[2] = $verb;

	//loop through the intcode program following the instructions and return the output
	for($i = 0; $i < count($array);) {
		//Opcode Address is the last two digits of an up to 5 digit number in the first item in each instruction
		$opcodeAddress = $array[$i];
		//opcode parameters are parameters for the opcode Instruction,
		$opcodeParamOne = $array[$array[$i + 1]];
		$opcodeParamTwo = $array[$array[$i + 2]];

		if($opcodeAddress === 1) {
			//opcode address 1 adds its parameters
			$array[$array[$i + 3]] = $opcodeParamOne + $opcodeParamTwo;
			$i = $i + 4;
		} else if($opcodeAddress === 2) {
			//opcode address 2 mutliplies its parameters
			$array[$array[$i + 3]] = $opcodeParamOne * $opcodeParamTwo;
			$i = $i + 4;
		} else if($opcodeAddress === 99) {
			$i = count($array); //exits the loop
			$answer = $array[0]; //returns the item at position 0
		} else {
			return "Error: Invalid Input";
		}
	}
	return $answer;
}

$puzzleInput = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 9, 19, 1, 19, 5, 23, 1, 13, 23, 27, 1, 27, 6, 31, 2, 31, 6, 35, 2, 6, 35, 39, 1, 39, 5, 43, 1, 13, 43, 47, 1, 6, 47, 51, 2, 13, 51, 55, 1, 10, 55, 59, 1, 59, 5, 63, 1, 10, 63, 67, 1, 67, 5, 71, 1, 71, 10, 75, 1, 9, 75, 79, 2, 13, 79, 83, 1, 9, 83, 87, 2, 87, 13, 91, 1, 10, 91, 95, 1, 95, 9, 99, 1, 13, 99, 103, 2, 103, 13, 107, 1, 107, 10, 111, 2, 10, 111, 115, 1, 115, 9, 119, 2, 119, 6, 123, 1, 5, 123, 127, 1, 5, 127, 131, 1, 10, 131, 135, 1, 135, 6, 139, 1, 10, 139, 143, 1, 143, 6, 147, 2, 147, 13, 151, 1, 5, 151, 155, 1, 155, 5, 159, 1, 159, 2, 163, 1, 163, 9, 0, 99, 2, 14, 0, 0];
$puzzleInput[1] = 12;
$puzzleInput[2] = 2;
echo(bruteIntcode($puzzleInput));