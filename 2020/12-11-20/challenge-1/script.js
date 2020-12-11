let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8"}).trim();
input = input.replace(/\r/gi, "").split(/\n/);

let testInput = ["L.LL.LL.LL",
	"LLLLLLL.LL",
	"L.L.L..L..",
	"LLLL.LL.LL",
	"L.LL.LL.LL",
	"L.LLLLL.LL",
	"..L.L.....",
	"LLLLLLLLLL",
	"L.LLLLLL.L",
	"L.LLLLL.LL"];

const findTakenSeats = (input, i, j) => {
	let n = null;
	let s = null;
	let e = null;
	let w = null;
	let ne = null;
	let nw = null;
	let se = null;
	let sw = null;
	let itor = 1;
	while(n === null) {
		(i - itor >= 0) ? n = input[i - itor][j] : n = 'F';
		n === "." ? n = null : n;
		itor++;
	}itor = 1;
	while(s === null) {
		(i + itor < input.length) ? s = input[i + itor][j] : s = 'F';
		s === "." ? s = null : s;
		itor++;
	}itor = 1;
	while(e === null) {
		(j + itor < input[i].length) ? e = input[i][j + itor] : e = 'F';
		(e === ".") ? e = null : e;
		itor++;
	}itor = 1;
	while(w === null) {
		(j - itor >= 0) ? w = input[i][j - itor] : w = 'F';
		(w === ".") ? w = null : w;
		itor++;
	}itor = 1;
	while(se === null) {
		(i + itor < input.length && j + itor < input[i].length) ? se = input[i + itor][j + itor] : se = 'F';
		(se === ".") ? se = null : se;
		itor++;
	}itor = 1;
	while(ne === null) {
		(i - itor >= 0 && j + itor < input[i].length ) ? ne = input[i - itor][j + itor] : ne = 'F';
		(ne === ".") ? ne = null : ne;
		itor++;
	}itor = 1;
	while(sw === null) {
		(i + itor < input.length && j - itor >= 0) ? sw = input[i + itor][j - itor] : sw = 'F';
		(sw === ".") ? sw = null : sw;
		itor++;
	}itor = 1;
	while(nw === null) {
		(i - itor >= 0 && j - itor >= 0) ? nw = input[i - itor][j - itor] : nw = 'F';
		(nw === ".") ? nw = null : nw;
		itor++;
	}
	let rose = [nw, n, ne, w, " ", e, sw, s, se];
	let sittingCount = 0;
	for(let k = 0; k < rose.length; k++) {
		if(rose[k] === '#') {
			sittingCount++
		}
	}
	return sittingCount;
};

function parseSolution(answer) {
	let temp = answer;
	temp = temp.join("");
	let counter = 0;
	for(let k = 0; k < temp.length; k++) {
		if(temp[k] === '#') {
			counter++;
		}
	}
	return counter;
}

function solve(input) {
	let prevArr = [];
	let newArr = [];
	let searchArr = [];
	newArr.push(...input);
	do {
		prevArr = [];
		for(let i = 0; i < newArr.length; i++) {
			prevArr.push(newArr[i]);
			searchArr.push(newArr[i]);
			newArr[i] = newArr[i].split('');
			prevArr[i] = prevArr[i].split('');
		}
		for(let i = 0; i < prevArr.length; i++) {
			for(let j = 0; j < prevArr[i].length; j++) {
				let sittingCount = findTakenSeats(prevArr, i, j);
				if(prevArr[i][j] === 'L' && sittingCount === 0) {
					newArr[i][j] = '#';
				}
				if(prevArr[i][j] === '#' && sittingCount >= 5) {
					newArr[i][j] = 'L';
				}
			}
		}
		for(let i = 0; i < newArr.length; i++) {
			newArr[i] = newArr[i].join('');
			prevArr[i] = prevArr[i].join('');
		}
	} while(newArr.join('') !== prevArr.join(''));
	return parseSolution(newArr);
}
console.log(solve(input));
