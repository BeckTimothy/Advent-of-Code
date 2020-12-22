let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
input = input.replace(/\r/gi, "").split(/\n/);
for(let i = 0; i < input.length; i++) {
	input[i] = input[i].split("");
}
input = [[input]];
let testInput = [".#.", "..#", "###"];
for(let i = 0; i < testInput.length; i++) {
	testInput[i] = testInput[i].split("");
}
testInput = [[testInput]];
//counts the number of active cubes within a 4D nested array
const countActives = (input) => {
	let count = 0;
	for(let a = 0; a < input.length; a++) {
		for(let z = 0; z < input[a].length; z++) {
			for(let y = 0; y < input[a][z].length; y++) {
				for(let x = 0; x < input[a][z][y].length; x++) {
					if(input[a][z][y][x] === "#") {
						count++
					}
				}
			}
		}
	}
	return count;
};
/**
 * the values a,z,y,x are coordinates representing a point in a hypercube
 * the values b,h,l,w are iterating through the breadth, height, length, and width of each dimension.
 * @param a value representing part of a coordinate in a hypercube
 * @param z value representing part of a coordinate in a hypercube
 * @param y value representing part of a coordinate in a hypercube
 * @param x value representing part of a coordinate in a hypercube
 * @param input 4-dimensional nested array representing a hypercube
 * @returns {string} active status of the provided point given its surroundigs
 */
const activeHandler = (a, z, y, x, input) => {
	let count = 0;
	let arr = [];
	for(let b = a - 1; b <= a + 1; b++) {
		for(let h = z - 1; h <= z + 1; h++) {
			for(let l = y - 1; l <= y + 1; l++) {
				for(let w = x - 1; w <= x + 1; w++) {
					if(a === b && h === z && y === l && w === x) {
						arr.push(".");
						continue;
					}
					let valOutOfRange = b < 0 || h < 0 || l < 0 || w < 0 || b >= input.length || h >= input[a].length || l >= input[a][z].length || w >= input[a][z][y].length;
					if(valOutOfRange) {
						arr.push(".");
						continue;
					}
					if(input[b][h][l][w] === "#") {
						arr.push("#");
						count++;
					}
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
/**
 * the values a,z,y,x are coordinates representing a point in a hypercube
 * the values b,h,l,w are iterating through the breadth, height, length, and width of each dimension.
 * @param a value representing part of a coordinate in a hypercube
 * @param z value representing part of a coordinate in a hypercube
 * @param y value representing part of a coordinate in a hypercube
 * @param x value representing part of a coordinate in a hypercube
 * @param input 4-dimensional nested array representing a hypercube
 * @returns {string} active status of the provided point given its surroundigs
 */
const inactiveHandler = (a, z, y, x, input) => {
	let count = 0;
	for(let b = a - 1; b <= a + 1; b++) {
		for(let h = z - 1; h <= z + 1; h++) {
			for(let l = y - 1; l <= y + 1; l++) {
				for(let w = x - 1; w <= x + 1; w++) {
					if(a === b && h === z && y === l && w === x) {
						continue;
					}
					let valOutOfRange = b < 0 || h < 0 || l < 0 || w < 0 || b >= input.length || h >= input[a].length || l >= input[a][z].length || w >= input[a][z][y].length;
					if(valOutOfRange) {
						continue;
					}
					if(input[b][h][l][w] === "#") {
						count++;
					}
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
/**
 * the values a,z,y,x are coordinates representing a point in a hypercube
 * @param input 4-dimensional nested array representing a hypercube
 * @param iterator number of times to iterate this conway-hypercube
 * @returns {number} number of active cubes in this conway hyper-cube after given iterations
 */
function conwaySolve(input, iterator) {
	do {
		input = edgeHandler(input);
		let copy = arrClone(input);
		for(let a = 0; a < copy.length; a++) {
			for(let z = 0; z < copy[a].length; z++) {
				for(let y = 0; y < copy[a][z].length; y++) {
					for(let x = 0; x < copy[a][z][y].length; x++) {
						if(copy[a][z][y][x] === "#") {
							input[a][z][y][x] = activeHandler(a, z, y, x, copy);
						} else {
							input[a][z][y][x] = inactiveHandler(a, z, y, x, copy);
						}
					}
				}
			}
		}
		iterator--;
	} while(iterator > 0);
	return countActives(input);
}
//edgeHandler finds the edges of the 3D array that contains active cubes, and adds a layer to that edge.
const edgeHandler = (input) => {
	let needsLayers = false;
	//check a min and max layer
	for(let z = 0; z < input[0].length; z++) {
		for(let y = 0; y < input[0].length; y++) {
			if(input[0][z][y].includes('#') || input[input.length - 1][z][y].includes('#')) {
				needsLayers = true;
				break;
			}
		}
	}
	if(!needsLayers) {
		// check z min and max layer
		for(let a = 0; a < input.length; a++) { // loop through z layers
			for(let y = 0; y < input[a][0].length; y++) {
				if(input[a][0][y].includes('#') || input[a][input[a].length - 1][y].includes('#')) {
					needsLayers = true;
					break;
				}
			}
		}
	}
	if(!needsLayers) {
		// check y north and south layer
		for(let a = 0; a < input.length; a++) {
			for(let z = 0; z < input[a].length; z++) { // loop through z layers
				if(input[a][z][0].includes('#') || input[a][z][input[a][z].length - 1].includes('#')) {
					needsLayers = true;
					break;
				}
			}
		}
	}
	if(!needsLayers) {
		// check x beginning and end
		for(let a = 0; a < input.length; a++) {
			for(let z = 0; z < input[a].length; z++) { // loop through z layers
				for(let y = 0; y < input[a][z].length; y++) { // loop through y layers
					if(input[a][z][y][0] === '#' || input[a][z][y][input[a][z][y].length - 1] === '#') {
						needsLayers = true;
						break;
					}
				}
			}
		}
	}
	if(needsLayers) {
		//add x layers
		for(let a = 0; a < input.length; a++) {
			for(let z = 0; z < input[a].length; z++) {
				for(let y = 0; y < input[a][z].length; y++) {
					input[a][z][y].push(".");
					input[a][z][y].unshift(".");
				}
			}
		}
		//add y layers from width x
		for(let a = 0; a < input.length; a++) {
			for(let z = 0; z < input[a].length; z++) {
				input[a][z].push([]);
				input[a][z].unshift([]);
				for(let x = 0; x < input[a][z][1].length; x++) {
					input[a][z][0].push(".");
					input[a][z][input[a][z].length - 1].push(".");
				}
			}
		}
		for(let a = 0; a < input.length; a++) {
			//add z layers from width x and length y
			input[a].push([]);
			input[a].unshift([]);
			for(let y = 0; y < input[a][1].length; y++) {
				input[a][0].push([]);
				input[a][input[a].length - 1].push([]);
				for(let x = 0; x < input[a][1][y].length; x++) {
					input[a][0][y].push(".");
					input[a][input[a].length - 1][y].push(".");
				}
			}
		}
		//add a layers from breadth z, width x, and length y,
		input.push([]);
		input.unshift([]);
		for(let z = 0; z < input[1].length; z++) {
			input[0].push([]);
			input[input.length - 1].push([]);
			for(let y = 0; y < input[1][z].length; y++) {
				input[0][z].push([]);
				input[input.length - 1][z].push([]);
				for(let x = 0; x < input[1][z][y].length; x++) {
					input[0][z][y].push(".");
					input[input.length - 1][z][y].push(".");
				}
			}
		}
	}
	return input;
};
//array clone handles duplicating nested arrays without making references.
function arrClone(arr) {
	let i, copy;
	if(Array.isArray(arr)) {
		copy = arr.slice(0);
		for(i = 0; i < copy.length; i++) {
			copy[i] = arrClone(copy[i]);
		}
		return copy;
	} else if(typeof arr === 'object') {
		throw 'Cannot clone array containing an object!';
	} else {
		return arr;
	}
}
console.log(conwaySolve(input, 6));