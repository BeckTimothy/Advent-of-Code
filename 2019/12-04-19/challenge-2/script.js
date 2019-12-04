/**
 * This is challenge 2 of 2019-12-04 of Advent of Code's 25-day challenge
 *
 *
 * @param {number} lowerValue
 * @param {number} higherValue
 * @returns int number of integers that meet certain requirements in a range
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */

function passwordFinder(lowerValue, higherValue) {
	let incrementer = 0;
	//loop through the value range
	for(i = lowerValue; i <= higherValue; i++) {
		//if digits never decrease from left to right
		if(i.toString().charAt(0) <= i.toString().charAt(1) &&
			i.toString().charAt(1) <= i.toString().charAt(2) &&
			i.toString().charAt(2) <= i.toString().charAt(3) &&
			i.toString().charAt(3) <= i.toString().charAt(4) &&
			i.toString().charAt(4) <= i.toString().charAt(5)) {
			//if the first two digits are the same, but not the third
			if((i.toString().charAt(0) === i.toString().charAt(1)) &&
				i.toString().charAt(1) !== i.toString().charAt(2)){
				incrementer = incrementer + 1;
			//increment if digits 2 and 3 are the same but different from 1 and 4
			}else if(i.toString().charAt(2) === i.toString().charAt(1) &&
				i.toString().charAt(1) !== i.toString().charAt(0) &&
				i.toString().charAt(3) !== i.toString().charAt(2)){
				incrementer = incrementer + 1;
			//increment if digits 3 and 4 are the same but different from 2 and 5
			}else if(i.toString().charAt(2) === i.toString().charAt(3) &&
				i.toString().charAt(3) !== i.toString().charAt(4) &&
				i.toString().charAt(1) !== i.toString().charAt(2)){
				incrementer = incrementer + 1;
			//increment if digits 5 and 4 are the same but different from 3 and 6
			}else if(i.toString().charAt(4) === i.toString().charAt(3) &&
				i.toString().charAt(3) !== i.toString().charAt(2) &&
				i.toString().charAt(5) !== i.toString().charAt(4)){
				incrementer = incrementer + 1;
			//increment if digits 5 and 6 are the same but different from 4
			}else if(i.toString().charAt(4) === i.toString().charAt(5) &&
				i.toString().charAt(3) !== i.toString().charAt(4)){
				incrementer = incrementer + 1;
			}
		}
	}
	return incrementer;
}



let lowerValue = 136760;
let higherValue = 595730;
console.log(passwordFinder(lowerValue, higherValue));