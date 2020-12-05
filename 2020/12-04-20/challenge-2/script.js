const fs = require('fs');
let input = fs.readFileSync('../challenge-1/input.txt', {encoding: 'utf8', flag: 'r'});
//
// I want to prepend this script with the fact that I am terribly embarrassed by it.
//
// it works tho
//
class Passport {
	#hcl; //hairColor
	#byr; //birthYear
	#cid; //countryId
	#ecl; //eyeColor
	#iyr; //issueYear
	#pid; //passportId
	#eyr; //expirationYear
	#hgt; //height
	constructor(hcl, byr, cid, ecl, iyr, pid, eyr, hgt) {
			this.setHairColor(hcl);
			this.setBirthYear(byr);
			this.setCountryId(cid);
			this.setEyeColor(ecl);
			this.setIssueYear(iyr);
			this.setPassportId(pid);
			this.setExpirationYear(eyr);
			this.setHeight(hgt);
	}
	setHairColor(hcl) {
		try{
			//trim
			hcl = hcl.trim();
			//validate
			if(hcl.match(/(#)([a-fA-F0-9]{6})/) !== null){
				this.#hcl = hcl;
			}else{
				this.#hcl = "invalid";
			}
		}catch (err) {
			this.#hcl = "invalid";
		}
	}
	getHairColor() {
		return this.#hcl;
	}
	setBirthYear(byr) {
		//trim
		try {
			byr = byr.trim();
			if(byr.length !== 4 || Number(byr) > 2002 || Number(byr) < 1920) {
				this.#byr =  "invalid";
			} else {
				this.#byr = byr;
			}
		} catch {
			this.#byr =  "invalid";
		}
	}
	getBirthYear() {
		return this.#byr;
	}
	setIssueYear(iyr) {
		try {
			iyr = iyr.trim();
			if(iyr.length !== 4 || Number(iyr) > 2020 || Number(iyr) < 2010) {
				this.#iyr = "invalid";
			} else {
				this.#iyr = iyr;
			}
		} catch {
			this.#iyr = "invalid";
		}
	}
	getIssueYear() {
		return this.#iyr;
	}
	setExpirationYear(eyr) {
		try {
			eyr = eyr.trim();
			if(eyr.length !== 4 || Number(eyr) > 2030 || Number(eyr) < 2020) {
				this.#eyr = "invalid"
			} else {
				this.#eyr = eyr;
			}
		} catch {
			this.#eyr = "invalid";
		}
	}
	getExpirationYear() {
		return this.#eyr;
	}
	setHeight(hgt) {
		try {
			hgt = hgt.trim();
			let num = Number(hgt.substring(0, hgt.length - 2));
			if( (hgt.substr(-2) !== "cm" && hgt.substr(-2) !== "in") ||
				hgt.substr(-2) === "cm" && (num < 150 || num > 193) ||
				hgt.substr(-2) === "in" && (num < 59 || num > 76) ) {
				this.#hgt = "invalid";
			}else {
				this.#hgt = hgt;
			}
		} catch {
			this.#hgt = "invalid";
		}
	}
	getHeight() {
		return this.#hgt;
	}
	setEyeColor(ecl) {
		//trim
		try {
			ecl = ecl.trim();
			switch(ecl) {
				case "amb":
					this.#ecl = ecl;
					break;
				case "brn":
					this.#ecl = ecl;
					break;
				case "blu":
					this.#ecl = ecl;
					break;
				case "gry":
					this.#ecl = ecl;
					break;
				case "grn":
					this.#ecl = ecl;
					break;
				case "hzl":
					this.#ecl = ecl;
					break;
				case "oth":
					this.#ecl = ecl;
					break;
				default:
					this.#ecl = "invalid";
			}
		} catch {
			this.#ecl = "invalid";
		}
	}
	getEyeColor() {
		return this.#ecl;
	}
	setPassportId(pid) {
		//trim
		try {
			pid = pid.trim();
			if(Number(pid) < 0 || pid.length !== 9) {
				this.#pid = "invalid";
			} else{
				this.#pid = pid;
			}
		} catch {
			this.#pid = "invalid";
		}
	}
	getPassportId() {
		return this.#pid
	}
	setCountryId(cid) {
		//trim
		try {
			cid = cid.trim();
			this.#cid = cid;
		} catch {
			this.#cid = null;
		}
	}
	getCountryId() {
		return this.#cid;
	}
	validate() {
		//validate hair color with regex
		if(!(this.getHairColor().match(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/) !== null)){
			return false
		}
		//validate byr
		if(!(this.getBirthYear().match(/^(19[2-9]\d|200[0-2])$/) !== null)){
			return false;
		}
		//validate iyr
		if(!(this.getIssueYear().match(/^(201\d|2020)$/) !== null)){
			return false;
		}
		//validate eyr
		if(!(this.getExpirationYear().match(/^(202\d|2030)$/) !== null)){
			return false;
		}
		//validate hgt
		if(!(this.getHeight().match(/^((1[5-8]\d|19[0-3])cm|(59|6\d|7[0-6])in)$/) !== null) ){
			return false;
		}
		//validate ecl
		if(!(this.getEyeColor().match(/^(amb|blu|brn|gry|grn|hzl|oth)$/) !== null)){
			return false;
		}
		//validate pid
		if(!(this.getPassportId().match(/^(\d{9})$/) !== null)){
			return false;
		}
		//validate cid
		return true;
	}
}
function solve(input) {
	input = input.toString().split('\n\r\n');
	let validCount = 0;
	for(let i = 0; i < input.length; i++) {
		input[i] = input[i].split(/\s/gi);
		let hcl, byr, cid, ecl, iyr, pid, eyr, hgt = null;
		for(let j = 0; j < input[i].length; j++) {
			//console.log(input[i][j].substr(0, 3));
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
		try {
			input[i] = new Passport(hcl, byr, cid, ecl, iyr, pid, eyr, hgt);
			if(input[i].validate()){
				validCount++;
			}
		}catch {
			//console.log('Invalid');
		}
	}
	return validCount
}
console.log(solve(input));

