const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8', flag: 'r'});

function solve(input) {
	input = input.split('\n\n');
	let validCount = 0;
	for(let i = 0; i < input.length; i++) {
		input[i] = input[i].split(/\s/gi);
		let hcl, byr, cid, ecl, iyr, pid, eyr, hgt = null;
		for(let j = 0; j < input[i].length; j++) {
			switch(true) {
				case (input[i][j].substr(0, 3) === "hcl"):
					hcl = input[i][j].substr(4);
					break;
				case (input[i][j].substr(0, 3) === "byr"):
					byr = input[i][j].substr(4);
					break;
				case (input[i][j].substr(0, 3) === "cid"):
					cid = input[i][j].substr(4);
					break;
				case (input[i][j].substr(0, 3) === "ecl"):
					ecl = input[i][j].substr(4);
					break;
				case (input[i][j].substr(0, 3) === "iyr"):
					iyr = input[i][j].substr(4);
					break;
				case (input[i][j].substr(0, 3) === "pid"):
					pid = input[i][j].substr(4);
					break;
				case (input[i][j].substr(0, 3) === "eyr"):
					eyr = input[i][j].substr(4);
					break;
				case (input[i][j].substr(0, 3) === "hgt"):
					hgt = input[i][j].substr(4);
					break;
				default:
					break;
			}
		}
		if(typeof hcl !== 'undefined' && typeof hcl !== 'object' &&
			typeof byr !== 'undefined' && typeof byr !== 'object' &&
			typeof hgt !== 'undefined' && typeof hgt !== 'object' &&
			typeof ecl !== 'undefined' && typeof ecl !== 'object' &&
			typeof iyr !== 'undefined' && typeof iyr !== 'object' &&
			typeof pid !== 'undefined' && typeof pid !== 'object' &&
			typeof eyr !== 'undefined' && typeof eyr !== 'object'
		) {
			validCount++
		}
	}
	return validCount
}
console.log(solve(input));