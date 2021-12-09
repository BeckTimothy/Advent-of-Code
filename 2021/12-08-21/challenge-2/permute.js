const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\n');

let outputs = [];
let permutations = [];

class Key {
	constructor(t,tl,tr,m,bl,br,b) {
		this.t = t;
		this.tl = tl;
		this.tr = tr;
		this.m = m;
		this.bl = bl;
		this.br = br;
		this.b = b;
		this.nums = null;
		this.allNums = null;
	}
	setNums = () => {
		//this is here instead of in the constructor to prevent memory issues while generating all permutations.
		let t = this.t;
		let tl = this.tl;
		let tr = this.tr;
		let m = this.m;
		let bl = this.bl;
		let br = this.br;
		let b = this.b;

		let zero = [t,tl,tr,bl,br,b].sort().join('');
		let one = [tr,br].sort().join('');
		let two = [t,b,m,tr,bl].sort().join('');
		let three = [t,b,m,tr,br].sort().join('');
		let four = [m,tr,br,tl].sort().join('');
		let five = [t,b,m,tl,br].sort().join('');
		let six = [t,m,b,tl,bl,br].sort().join('');
		let seven = [t,tr,br].sort().join('');
		let eight = [t,m,b,tl,bl,tr,br].sort().join('');
		let nine = [t,m,b,tl,tr,br].sort().join('');

		this.nums = {"0": zero, "1": one, "2": two, "3": three, "4": four, "5": five, "6": six, "7": seven, "8": eight, "9": nine}
		this.allNums = [zero, one, two, three, four, five, six, seven, eight, nine]
	}
	checkLine(line){
		let temp = line.replace(' | ',' ');
		temp = temp.split(' ')

		return temp.every(x => this.allNums.some(y => y === x.split('').sort().join('') ))
	}
	getNum = (line) => {
		let temp = line.split('| ');
		temp = temp[1];
		temp = temp.split(' ');

		temp = temp.map(x => {
			x = x.split('').sort().join('')
			return x
		})

		temp = temp.map(x => {
			return Object.keys(this.allNums).find(key => this.allNums[key] === x);
		})
		return temp
	}
}

//create an array of all possible combinations of 7 characters. 0(n!) yikes!
const permutator = (inputArr) => {
	let result = [];

	const permute = (arr, m = []) => {
		if(arr.length === 0) {
			let temp = new Key(m[0], m[1], m[2], m[3], m[4], m[5], m[6])
			permutations.push(temp)
		} else {
			for(let i = 0; i < arr.length; i++) {
				let curr = arr.slice();
				let next = curr.splice(i, 1);
				permute(curr.slice(), m.concat(next))
			}
		}
	}

	permute(inputArr)
	return result;
}
permutator(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
console.log(permutations[0])
permutations.forEach(x => {
	x.setNums();
	}
)

//loop through arrays in O(n^2) incrementing the count by the outputs
let count = 0;
input.forEach(x => {
	for(let i in permutations){
		if(permutations[i].checkLine(x)){
			count += Number(permutations[i].getNum(x).join(''));
		}
	}
})
console.log(count)