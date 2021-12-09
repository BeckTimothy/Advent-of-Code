const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\n');

class SevenSegment {
	#digits;
	constructor(segment) {


		this.input = segment;

		let temp = segment.split('|')
		this.output = temp[1].trim();

		this.#digits = segment.split(' ')

		this.solved = false;
		this.outputValue = null;

		this.possibleLegs = {
			"t"	:	"abcdefg",
			"tl"	:	"abcdefg",
			"tr"	:	"abcdefg",
			"m"	:	"abcdefg",
			"bl"	:	"abcdefg",
			"br"	:	"abcdefg",
			"b"	:	"abcdefg"
		};
		this.possibleNums = {
			"0"	:	"abcdefg", // has to be 6 length
			"1"	:	"abcdefg", // only which will 2 length
			"2"	:	"abcdefg", // has to be 5 length
			"3"	:	"abcdefg", // has to be 5 length
			"4"	:	"abcdefg", // only which will be 4 length
			"5"	:	"abcdefg", // has to be 5 length
			"6"	:	"abcdefg", // has to be 6 length
			"7"	:	"abcdefg", // only which will be 3 length
			"8"	:	"abcdefg", // only which will be 7 length
			"9"	:	"abcdefg"  // has to be 6 length
		};

		this.identifiedLegs = {
			"t"	:	"abcdefg",
			"tl"	:	"abcdefg",
			"tr"	:	"abcdefg",
			"m"	:	"abcdefg",
			"bl"	:	"abcdefg",
			"br"	:	"abcdefg",
			"b"	:	"abcdefg"
		};
		this.identifiedNums = {
			"0"	:	"abcdefg", // has to be 6 length
			"1"	:	"abcdefg", // only which will 2 length
			"2"	:	"abcdefg", // has to be 5 length
			"3"	:	"abcdefg", // has to be 5 length
			"4"	:	"abcdefg", // only which will be 4 length
			"5"	:	"abcdefg", // has to be 5 length
			"6"	:	"abcdefg", // has to be 6 length
			"7"	:	"abcdefg", // only which will be 3 length
			"8"	:	"abcdefg", // only which will be 7 length
			"9"	:	"abcdefg"  // has to be 6 length
			};
		this.isIdentified = {
			"0"	:	false,
			"1"	:	false,
			"2"	:	false,
			"3"	:	false,
			"4"	:	false,
			"5"	:	false,
			"6"	:	false,
			"7"	:	false,
			"8"	:	false,
			"9"	:	false,
			"t"	:	false,
			"tl"	:	false,
			"tr"	:	false,
			"m"	:	false,
			"bl"	:	false,
			"br"	:	false,
			"b"	:	false
		};
	}

	get line() {
		return this.input
	}

	get nums() {
		return this.#digits;
	}
	set nums(arr) {
		this.#digits = arr
	}
	solvedVal(val) {
		return isNaN(val) === true ? this.identifiedLegs[val] : this.identifiedNums[val];
	}
	get getIdentifiedNums() {
		return this.identifiedNums
	}
	set setIdentifiedNums(obj) {
		this.identifiedNums = obj
	}

	identifyVals = (val, str) => {
		if(isNaN(val) === true){
			//legs
			let obj = this.identifiedLegs;
			obj[val] = str;
			this.identifiedLegs = obj;

			obj = this.isIdentified;
			obj[val] = true;
			this.isIdentified = obj;
		} else {
			//nums
			let tempArr = str.split('')
			let temp = "abcdefg";
			tempArr.forEach(x=>temp = temp.replace(x,''))

			this.eliminateNums(val,temp)
			let obj = this.identifiedNums;
			obj[val] = str;
			this.identifiedNums = obj;

			obj = this.isIdentified;
			obj[val] = true;
			this.isIdentified = obj;
		}
	}

	fixInputs = () => {
		let temp = this.input.split(' ');
		temp = temp.map(x => {
			x = x.split('').sort().join('')
			return x
		})
		temp = temp.join(' ');
		this.input = temp;

		temp = this.output.split(' ');
		temp = temp.map(x => {
			x = x.split('').sort().join('')
			return x
		})
		temp = temp.join(' ');
		this.output = temp;
	}

	eliminateNums(val, str) {
		let nums = this.possibleNums;
		let legs = this.possibleLegs;
		let tempArr = str.split('');

		let list = this.possibleNums[val];
		tempArr.forEach(x=>list = list.replace(x,''))
		nums[val] = list;

		switch(val){
			case 0:
				break;
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			case 8:
				break;
			case 9:
				break;
		}

		this.possibleNums = nums;
		this.possibleLegs = legs;
	}

	eliminateVals = (val, char) => {
		if(isNaN(val) === true){
			//legs
			let obj = this.identifiedLegs;

			let str = obj[val];
			str = str.replace(char,'');
			obj[val] = str;

			this.identifiedLegs = obj;
		} else {
			//nums
			let obj = this.identifiedNums;

			let str = obj[val];
			str = str.replace(char,'');
			obj[val] = str;

			this.identifiedNums = obj;
		}
	}

	solveOutput = {

	}
}


const identifyUniques = (line) => {
	let temp = line.nums
	for(let i in temp) {
		temp[i] = temp[i].split('').sort().join('');
		switch(temp[i].length){
			case 2:
				line.identifyVals(1, temp[i]);
				break;
			case 3:
				line.identifyVals(7, temp[i]);
				break;
			case 4:
				line.identifyVals(4, temp[i]);
				break;
			case 7:
				line.identifyVals(8, temp[i]);
				break;
		}
	}

	return line;
}

const identifySixSegs = (line) => {
	console.log(line)
}

const identifyFiveSegs = (line) => {

}



let test = new SevenSegment(input[0])
test.fixInputs();
test = identifyUniques(test);

console.log(identifySixSegs(test));