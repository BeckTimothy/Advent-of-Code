<?php
/**
 * This is challenge 2 of 2019-12-02 of Advent of Code's 25-day challenge done in PHP.
 *
 * @param array intcode dataset
 * @return {string} containing the needed parameters to return a specified value at position 0 of array when intcode program finishes
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */
function intcodeProgram($array) {
	//noun and verb are array item 1 and 2, that modify what the first opcode instruction does and changes the intcode program's output
	//$array[1] = $noun;
	//$array[2] = $verb;
	$storedValue = 1;

	//loop through the intcode program following the instructions and return the output
	for($i = 0; $i < count($array);) {
		echo("position: $i, value at position[$i]: $array[$i]
		");
		//Opcode Address is the last two digits of an up to 5 digit number in the first item in each instruction
		$opcodeAddress = substr(strval( $array[$i] ), -2, 2);

		//$intcodePointer =
		$paramModeOne = 0;
		$paramModeTwo = 0;
		$paramModeThree = 0;
		if(strlen($array[$i]) > 2) {
			//targets the parameter for opcodeParamOne in the opcode address; one digit before address
			$paramModeOne = substr(strval( $array[$i] ), strlen( strval( $array[$i] ) ) - 3, 1);
		}
		if(strlen($array[$i]) > 3) {
			//targets the parameter for opcodeParamTwo in the opcode address; two digits before address
			$paramModeTwo = substr(strval( $array[$i] ), strlen( strval( $array[$i] ) ) - 4, 1);
		}
		if(strlen($array[$i]) > 4) {
			//targets the parameter for opcodeParamThree in the opcode address; three digits before address
			$paramModeThree = substr(strval( $array[$i] ), strlen( strval( $array[$i] ) ) - 5, 1);
		}




		//sets parameter mode of opcode parameter one
		if($paramModeOne === "1") {
			//immediate mode
			$opcodeParamOne = $array[$i + 1];
		} else {
			//position mode
			$opcodeParamOne = $array[$array[$i + 1]];
		}

		//sets parameter mode of opcode parameter otwo
		if($paramModeTwo === 1) {
			//immediate mode
			$opcodeParamTwo = $array[$i + 2];
		} else {
			//position mode
			$opcodeParamTwo = $array[$array[$i + 2]];
		}
echo("address: $opcodeAddress, $paramModeOne, $paramModeTwo, at position: $i");
		if($opcodeAddress === "00" || $opcodeAddress === "0") {
			//move pointer to next item
			$i = $i + 1; //to next opcode instruction
		} else if($opcodeAddress === "01"  || $opcodeAddress === "1") {
			//opcode address 1 adds its parameters
			$array[$array[$i + 3]] = $opcodeParamOne + $opcodeParamTwo;
			$i = $i + 4; //to next opcode instruction
		} else if($opcodeAddress === "02"  || $opcodeAddress === "2") {
			//opcode address 2 mutliplies its parameters
			$array[$array[$i + 3]] = $opcodeParamOne * $opcodeParamTwo;
			$i = $i + 4; //to next opcode instruction
		} else if($opcodeAddress === "03" || $opcodeAddress === "3") {
		//address 3 stores the input at its parameter
			if($opcodeParamOne === 1) {
				$array[$i + 1] = $storedValue;
			}else{
				$array[$array[$i + 1]] = $storedValue;
			}
			$i = $i + 2; //to next opcode instruction
	} else if($opcodeAddress === "4"  || $opcodeAddress === "04") {
	//address 4 returns its parameter
		if($opcodeParamOne === 1) {
			echo($array[$i + 1]);
		} else{
			echo($array[$array[$i + 1]]);
		}
		$i = $i + 2; //to next opcode instruction
} else if($opcodeAddress === "99") {
			$i = count($array); //exits the loop
			$answer = $array[0]; //returns the item at position 0
			echo("value at pos 0: $array[0]");
			return $answer;
		} else {
			return "Error: Invalid Input";
		}
	}
}

$puzzleInput = [3,225,1,225,6,6,1100,1,238,225,104,0,1001,152,55,224,1001,224,-68,224,4,224,1002,223,8,223,1001,224,4,224,1,224,223,223,1101,62,41,225,1101,83,71,225,102,59,147,224,101,-944,224,224,4,224,1002,223,8,223,101,3,224,224,1,224,223,223,2,40,139,224,1001,224,-3905,224,4,224,1002,223,8,223,101,7,224,224,1,223,224,223,1101,6,94,224,101,-100,224,224,4,224,1002,223,8,223,101,6,224,224,1,224,223,223,1102,75,30,225,1102,70,44,224,101,-3080,224,224,4,224,1002,223,8,223,1001,224,4,224,1,223,224,223,1101,55,20,225,1102,55,16,225,1102,13,94,225,1102,16,55,225,1102,13,13,225,1,109,143,224,101,-88,224,224,4,224,1002,223,8,223,1001,224,2,224,1,223,224,223,1002,136,57,224,101,-1140,224,224,4,224,1002,223,8,223,101,6,224,224,1,223,224,223,101,76,35,224,1001,224,-138,224,4,224,1002,223,8,223,101,5,224,224,1,223,224,223,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1008,677,677,224,1002,223,2,223,1006,224,329,1001,223,1,223,8,677,226,224,102,2,223,223,1006,224,344,101,1,223,223,1107,226,226,224,1002,223,2,223,1006,224,359,1001,223,1,223,1108,677,226,224,102,2,223,223,1005,224,374,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,389,1001,223,1,223,108,677,677,224,1002,223,2,223,1005,224,404,1001,223,1,223,1007,677,677,224,102,2,223,223,1005,224,419,1001,223,1,223,8,226,677,224,102,2,223,223,1005,224,434,101,1,223,223,1008,677,226,224,102,2,223,223,1006,224,449,1001,223,1,223,7,677,677,224,102,2,223,223,1006,224,464,1001,223,1,223,8,226,226,224,1002,223,2,223,1005,224,479,1001,223,1,223,7,226,677,224,102,2,223,223,1006,224,494,1001,223,1,223,7,677,226,224,1002,223,2,223,1005,224,509,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,524,101,1,223,223,1007,677,226,224,102,2,223,223,1006,224,539,101,1,223,223,107,226,226,224,1002,223,2,223,1006,224,554,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,569,1001,223,1,223,1107,677,226,224,1002,223,2,223,1005,224,584,101,1,223,223,1107,226,677,224,102,2,223,223,1005,224,599,101,1,223,223,1108,226,677,224,102,2,223,223,1005,224,614,101,1,223,223,108,677,226,224,102,2,223,223,1005,224,629,101,1,223,223,107,226,677,224,102,2,223,223,1006,224,644,1001,223,1,223,1108,226,226,224,1002,223,2,223,1006,224,659,101,1,223,223,108,226,226,224,102,2,223,223,1005,224,674,101,1,223,223,4,223,99,226];
$testInput = [1002,4,3,4,33];
echo(intcodeProgram($testInput));