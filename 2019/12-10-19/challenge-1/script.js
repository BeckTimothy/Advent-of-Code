/**
 * This is challenge 10 of 2019-12-10 of Advent of Code's 25-day challenge
 * See the readme for an explanation
 *
 * @param arr array of strings containing a graph of points
 * @return array containing the coordinate of the point that has direct line of sight on the most other points
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */

function calculateBestAsteroid(arr) {
	//turn array into array of arrays so we can use array item positions as coordinates
	for(let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].split('');
	}
	//build array of asteroid coords
	let indexedArr = [];
	for(let i = 0; i < arr.length; i++) {
		//loop through y axis
		//loop through array of arrays
		for(let j = 0; j < arr[i].length; j++) {
			//loop through x axis
			//loop through inner arrays
			if(arr[i][j] === "#") {
				indexedArr.push([j, i]);
			}
		}
	}
	//instantiate temp values for looping
	let currentBestAsteroid = "";
	let currentBestCount = 0;
	let slopeArrHigh = [];
	let slopeArrLow = [];
	for(let i = 0; i < indexedArr.length; i++) {
		//loop for each item in the array
		let currentAsteroid = indexedArr[i];
		slopeArrHigh = [];
		slopeArrLow = [];
		for(let j = 0; j < indexedArr.length; j++) {
			//loop through each item for each item
			let compairedAsteroid = indexedArr[j];
			if(compairedAsteroid[0] > currentAsteroid[0]) {
				slopeArrHigh.push(m(currentAsteroid, compairedAsteroid));
			}else{
				slopeArrLow.push(m(currentAsteroid, compairedAsteroid));
			}
			if( j === indexedArr.length - 1 ){
				uniqH = slopeArrHigh.reduce(function(a,b){
					if (a.indexOf(b) < 0 ) a.push(b);
					return a;
				},[]);
				uniqL = slopeArrLow.reduce(function(a,b){
					if (a.indexOf(b) < 0 ) a.push(b);
					return a;
				},[]);
				let length = 0;
				if(uniqH.length > 0) {
					length = length + uniqH.length;
				}else{length=length-1;}
				if(uniqL.length > 0) {
					length = length + uniqL.length;
				}else{length=length-1;}
				if(length > currentBestCount) {
					currentBestCount = length - 1;
					currentBestAsteroid = currentAsteroid;
				}
			}
		}
	}
	return currentBestCount;
}


/*slope*/
function m(point1, point2) {
	return (point2[1] - point1[1]) / (point2[0] - point1[0]);
}
/*slope intercept*/
function b(point1, point2) {
	return -((m(point1, point2) * point2[1]) - point2[0]);
}



let test3arr = ["......#.#.",
"#..#.#....",
"..#######.",
".#.#.###..",
".#..#.....",
"..#....#.#",
"#..#....#.",
".##.#..###",
"##...#..#.",
".#....####"];

let test2arr = [
".#..##.###...#######",
"##.############..##.",
".#.######.########.#",
".###.#######.####.#.",
"#####.##.#.##.###.##",
"..#####..#.#########",
"####################",
"#.####....###.#.#.##",
"##.#################",
"#####.##.###..####..",
"..######..##.#######",
"####.##.####...##..#",
".#####..#.######.###",
"##...#.##########...",
"#.##########.#######",
".####.#.###.###.#.##",
"....##.##.###..#####",
".#.#.###########.###",
"#.#.#.#####.####.###",
"###.##.####.##.#..##",
];

let puzzleInput = [
	"##.#..#..###.####...######",
	"#..#####...###.###..#.###.",
	"..#.#####....####.#.#...##",
	".##..#.#....##..##.#.#....",
	"#.####...#.###..#.##.#..#.",
	"..#..#.#######.####...#.##",
	"#...####.#...#.#####..#.#.",
	".#..#.##.#....########..##",
	"......##.####.#.##....####",
	".##.#....#####.####.#.####",
	"..#.#.#.#....#....##.#....",
	"....#######..#.##.#.##.###",
	"###.#######.#..#########..",
	"###.#.#..#....#..#.##..##.",
	"#####.#..#.#..###.#.##.###",
	".#####.#####....#..###...#",
	"##.#.......###.##.#.##....",
	"...#.#.#.###.#.#..##..####",
	"#....#####.##.###...####.#",
	"#.##.#.######.##..#####.##",
	"#.###.##..##.##.#.###..###",
	"#.####..######...#...#####",
	"#..#..########.#.#...#..##",
	".##..#.####....#..#..#....",
	".###.##..#####...###.#.#.#",
	".##..######...###..#####.#",
];

let testarr = [
	".#..#",
	".....",
	"#####",
	"....#",
	"...##"
];

console.log(calculateBestAsteroid(puzzleInput));


