const fs = require('fs');
let input = fs.readFileSync('../challenge-1/input.txt', {encoding: 'utf8', flag: 'r'});
//
// I want to prepend this script with the fact that I am terribly embarrassed by it.
// at first I thought, oh hey I should over-engineer this with getters and setters and data validation
// then about 20 minutes into writing this I was struck with the realization of how much of a workload that would be
// so enjoy this almost object-oriented complete with setters but no getters and improperly formatted data validation.
// I also over-used, misused, and abused try blocks.
// it works tho
//
function createPassport(input) {
	const setHairColor = (hcl) => {
		//trim
		hcl = hcl.trim();
		//validate
		if(hcl.match(/(#)([a-fA-F0-9]{6})/) === null) {
			hcl = null;
		}
		//set
		if(hcl === null) {
			return "invalid passport";
		} else {
			return hcl;
		}
	};
	const setBirthYear = (byr) => {
		//trim
		try {
			byr = byr.trim();
		} catch {
			byr = null;
		}
		//validate
		if(byr.length !== 4) {
			byr = null;
		}
		try {
			if(Number(byr) > 2002 || Number(byr) < 1920) {
				byr = null;
			}
		} catch {//if catch is triggered byr is NaN
			byr = null;
		}
		//set
		if(byr === null) {
			return "invalid passport";
		} else {
			return byr;
		}
	};
	const setIssueYear = (iyr) => {
		//trim
		try {
			iyr = iyr.trim();
		} catch {
			iyr = null;
		}
		//validate
		if(iyr.length !== 4) {
			iyr = null;
		}
		try {
			if(Number(iyr) > 2020 || Number(iyr) < 2010) {
				iyr = null;
			}
		} catch {//if catch is triggered iyr is NaN
			iyr = null;
		}
		//set
		if(iyr === null) {
			return "invalid passport";
		} else {
			return iyr;
		}
	};
	const setExpirationYear = (eyr) => {
		//trim
		try {
			eyr = eyr.trim();
		} catch {
			eyr = null;
		}
		//validate
		if(eyr.length !== 4) {
			eyr = null;
		}
		try {
			if(Number(eyr) > 2030 || Number(eyr) < 2020) {
				eyr = null;
			}
		} catch {//if catch is triggered iyr is NaN
			eyr = null;
		}
		//set
		if(eyr === null) {
			return "invalid passport";
		} else {
			return eyr;
		}
	};
	const setHeight = (hgt) => {
		//trim
		try {
			hgt = hgt.trim();
		} catch {
			hgt = null;
		}
		//validate
		try {
			if(hgt.substr(-2) !== "cm" && hgt.substr(-2) !== "in") {
				hgt = null;
			}
			let num = Number(hgt.substring(0, hgt.length - 2));
			if(hgt.substr(-2) === "cm" && (num < 150 || num > 193)) {
				hgt = null
			}
			if(hgt.substr(-2) === "in" && (num < 59 || num > 76)) {
				hgt = null
			}
		} catch {//if catch is triggered we received an unexpected data type
			hgt = null;
		}
		//set
		if(hgt === null) {
			return "invalid passport";
		} else {
			return hgt;
		}
	};
	const setEyeColor = (ecl) => {
		//trim
		try {
			ecl = ecl.trim();
		} catch {
			ecl = null;
		}
		//validate
		switch(ecl) {
			case "amb":
				break;
			case "brn":
				break;
			case "blu":
				break;
			case "gry":
				break;
			case "grn":
				break;
			case "hzl":
				break;
			case "oth":
				break;
			default:
				ecl = null;
		}
		//set
		if(ecl === null) {
			return "invalid passport";
		} else {
			return ecl;
		}
	};
	const setPassportId = (pid) => {
		//trim
		try {
			pid = pid.trim();
		} catch {
			pid = null;
		}
		//validate
		try {
			if(Number(pid) < 0) {
				pid = null;
			}
			if(pid.length !== 9) {
				pid = null;
			}
		} catch {
			pid = null;
		}
		//set
		if(pid === null) {
			return "invalid passport";
		} else {
			return pid;
		}
	};
	const setCountryId = (cid) => {
		//trim
		try {
			cid = cid.trim();
		} catch {
			cid = null;
		}
		//validate

		//set
		if(cid === null) {
			return cid
		} else {
			return cid;
		}
	};
	function Passport(input) {
		input = input.split(/\s/gi);
		let hcl, byr, cid, ecl, iyr, pid, eyr, hgt = null;
		for(let j = 0; j < input.length; j++) {
			switch(true) {
				case (input[j].substr(0, 3) === "hcl"):
					hcl = input[j].substr(4);
					break;
				case (input[j].substr(0, 3) === "byr"):
					byr = input[j].substr(4);
					break;
				case (input[j].substr(0, 3) === "cid"):
					cid = input[j].substr(4);
					break;
				case (input[j].substr(0, 3) === "ecl"):
					ecl = input[j].substr(4);
					break;
				case (input[j].substr(0, 3) === "iyr"):
					iyr = input[j].substr(4);
					break;
				case (input[j].substr(0, 3) === "pid"):
					pid = input[j].substr(4);
					break;
				case (input[j].substr(0, 3) === "eyr"):
					eyr = input[j].substr(4);
					break;
				case (input[j].substr(0, 3) === "hgt"):
					hgt = input[j].substr(4);
					break;
				default:
					break;
			}
		}
		try {
			this.hcl = setHairColor(hcl);
		} catch(err) {
			this.hcl = "invalid passport";
		}
		try {
			this.byr = setBirthYear(byr);
		} catch(err) {
			this.byr = "invalid passport";
		}
		try {
			this.cid = setCountryId(cid);
		} catch(err) {
			this.cid = cid;
		}
		try {
			this.ecl = setEyeColor(ecl);
		} catch(err) {
			this.ecl = "invalid passport";
		}
		try {
			this.iyr = setIssueYear(iyr);
		} catch(err) {
			this.iyr = "invalid passport";
		}
		try {
			this.pid = setPassportId(pid);
		} catch(err) {
			this.pid = "invalid passport";
		}
		try {
			this.eyr = setExpirationYear(eyr);
		} catch(err) {
			this.eyr = "invalid passport";
		}
		try {
			this.hgt = setHeight(hgt);
		} catch(err) {
			this.hgt = "invalid passport";
		}
	}
	return new Passport(input);
}
function solve(input) {
	input = input.split('\n\n');
	let validCount = 0;
	for(let i = 0; i < input.length; i++) {
		input[i] = createPassport(input[i]);
		if(input[i].hcl !== "invalid passport" &&
			input[i].byr !== "invalid passport" &&
			input[i].pid !== "invalid passport" &&
			input[i].ecl !== "invalid passport" &&
			input[i].iyr !== "invalid passport" &&
			input[i].eyr !== "invalid passport" &&
			input[i].hgt !== "invalid passport"
		){
			validCount++
		}
	}
	return validCount
}
console.log(solve(input));

