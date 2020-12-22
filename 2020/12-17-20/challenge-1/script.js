let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
input = input.replace(/\r/gi, "").split(/\n/);
for(let i = 0; i < input.length; i++) {
	input[i] = input[i].split("");
}
input = [input];

let testInput = [".#.","..#", "###"];
for(let i = 0; i < testInput.length; i++) {
	testInput[i] = testInput[i].split("");
}
testInput = [testInput];

const countActives = (input) => {
	let count = 0;
	for(let z = 0; z < input.length; z++) {
		for(let y = 0; y < input[z].length; y++) {
			for(let x = 0; x < input[z][y].length; x++) {
				if(input[z][y][x] === "#") {
					count++
				}
			}
		}
	}
	return count;
};
const activeHandler = (z, y, x, input) => {
	let count = 0;
	let arr = [];
	for(let h = z - 1; h <= z + 1; h++) {
		for(let l = y - 1; l <= y + 1; l++) {
			for(let w = x - 1; w <= x + 1; w++) {
				if(h === z && y === l && w === x) {
					arr.push(".");
					continue;
				}
				let valOutOfRange = h < 0 || l < 0 || w < 0 || h >= input.length || l >= input[z].length || w >= input[z][y].length;
				if(valOutOfRange) {
					arr.push(".");
					continue;
				}
				if(input[h][l][w] === "#") {
					arr.push("#");
					count++;
				}
			}
		}
	}
	if(count === 2 || count === 3) {
		return "#";
	} else {
		return ".";
	}
};
const inactiveHandler = (z, y, x, input) => {
	let count = 0;
	for(let h = z - 1; h <= z + 1; h++) {
		for(let l = y - 1; l <= y + 1; l++) {
			for(let w = x - 1; w <= x + 1; w++) {
				if(h === z && y === l && w === x) {
					continue;
				}
				let valOutOfRange = h < 0 || l < 0 || w < 0 || h > input.length-1 || l > input[z].length-1 || w > input[z][y].length-1;
				if(valOutOfRange) {
					continue;
				}
				if(input[h][l][w] === "#") {
					count++;
				}

			}
		}
	}
	if(count === 3) {
		return "#";
	} else {
		return ".";
	}
};

function conwaySolve(input, iterator) {
	do {
		input = edgeHandler(input);
		let copy = arrClone(input);
		for(let z = 0; z < copy.length; z++) {
			for(let y = 0; y < copy[z].length; y++) {
				for(let x = 0; x < copy[z][y].length; x++) {
					if(copy[z][y][x] === "#") {
						input[z][y][x] = activeHandler(z, y, x, copy);
					} else {
						input[z][y][x] = inactiveHandler(z, y, x, copy);
					}
				}
			}
		}
		iterator--;
	}while(iterator > 0);
	return countActives(input);
}

//edgeHandler finds the edges of the 3D array that contains active cubes, and adds a layer to that edge.
const edgeHandler = (input) => {
	let needsLayers = false;
	for(let y = 0; y < input[0].length; y++) {
		if(input[0][y].includes('#')) {
			needsLayers = true;
			break;
		}
	}
	if(!needsLayers) {
		// check z top layer
		for(let y = 0; y < input[input.length - 1].length; y++) {
			if(input[input.length - 1][y].includes('#')) {
				needsLayers = true;
				break;
			}
		}
	}
	if(!needsLayers) {
		// check y north and south layer
		for(let z = 0; z < input.length; z++) { // loop through z layers
			if(input[z][0].includes('#') || input[z][input[z].length - 1].includes('#')) {
				needsLayers = true;
				break;
			}
		}
	}
	if(!needsLayers) {
		// check x beginning and end
		for(let z = 0; z < input.length; z++) { // loop through z layers
			for(let y = 0; y < input[z].length; y++) { // loop through y layers
				if(input[z][y][0] === '#' || input[z][y][input[z][y].length - 1] === '#') {
					needsLayers = true;
					break;
				}
			}
		}
	}
	if(needsLayers) {
		//add x layers
		for(let z = 0; z < input.length; z++) {
			for(let y = 0; y < input[z].length; y++) {
				console.log(input[z][y]);
				input[z][y].push(".");
				input[z][y].unshift(".");
			}
		}
		//add y layers from width x
		for(let z = 0; z < input.length; z++) {
			input[z].push([]);
			input[z].unshift([]);
			for(let x = 0; x < input[z][1].length; x++) {
				input[z][0].push(".");
				input[z][input[z].length - 1].push(".");
			}
		}
		//add z layers from width x and length y
		input.push([]);
		input.unshift([]);
		for(let y = 0; y < input[1].length; y++) {
			input[0].push([]);
			input[input.length - 1].push([]);
			for(let x = 0; x < input[1][y].length; x++) {
				input[0][y].push(".");
				input[input.length - 1][y].push(".");
			}
		}
	}
	return input;
};
//array clone handles duplicating nested arrays without making references.
function arrClone( arr ) {
	let i, copy;
	if( Array.isArray( arr ) ) {
		copy = arr.slice( 0 );
		for( i = 0; i < copy.length; i++ ) {
			copy[ i ] = arrClone( copy[ i ] );
		}
		return copy;
	} else if( typeof arr === 'object' ) {
		throw 'Cannot clone array containing an object!';
	} else {
		return arr;
	}
}

console.log(edgeHandler(testInput));
//console.log(conwaySolve(input, 6));