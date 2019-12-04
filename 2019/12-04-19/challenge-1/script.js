/**
 * This is challenge 1 of 2019-12-04 of Advent of Code's 25-day challenge
 *
 *
 * @param {number} lowerValue
 * @param {number} higherValue
 * @returns int number of integers that meet certain requirements in a range
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */

function passwordFinder(lowerValue, higherValue) {
	let incrementer = 0;
	for(i = lowerValue; i <= higherValue; i++) {
		if(i.toString().charAt(0) <= i.toString().charAt(1) &&
			i.toString().charAt(1) <= i.toString().charAt(2) &&
			i.toString().charAt(2) <= i.toString().charAt(3) &&
		i.toString().charAt(3) <= i.toString().charAt(4) &&
		i.toString().charAt(4) <= i.toString().charAt(5)) {

			if(i.toString().charAt(0) === i.toString().charAt(1) ||
				i.toString().charAt(2) === i.toString().charAt(1) ||
				i.toString().charAt(2) === i.toString().charAt(3) ||
				i.toString().charAt(4) === i.toString().charAt(3) ||
				i.toString().charAt(4) === i.toString().charAt(5)) {
				incrementer = incrementer + 1;
			}
		}
	}
	return incrementer;
}



let lowerValue = 136760;
let higherValue = 595730;
console.log(passwordFinder(lowerValue, higherValue));