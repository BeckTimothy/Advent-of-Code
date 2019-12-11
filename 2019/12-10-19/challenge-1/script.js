/**
 * This is challenge 1 of 2019-12-10 of Advent of Code's 25-day challenge
 * See the readme for an explanation
 *
 * @param arr array of strings containing a graph of points
 * @return array containing the coordinate of the point that has direct line of sight on the most other points
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */

function calculateBestAsteroid(arr) {
	let bestAsteroid = [[],""];
	for(i=0; i < arr.length; i++) {
		//temp array to count against
		let currentAsteroid = i;
		let asteroidCompare = [];
		for(j=0; j < arr.length; j++) {
			//if i and j are the same asteroid, skip comparison
			if(i === j) {
				j++;
			}
			//if array of asteroids is empty push first asteroid
			if(asteroidCompare.length === 0){
				asteroidCompare.push(arr.slice(j, j + 1)[0]);
			}
			//loop through astroid compare array to see if i and j are in line with any asteroids
			for(k = 0; k < asteroidCompare.length; k++) {
				//calculate slope
				let m = ( i[1] - j[1] ) / ( i[0] - j[0] );
				//calculate slope intercept
				let b = i[1] - ( m * i[0]);

				if(asteroidCompare[k][1] === ( m * asteroidCompare[k][0] ) + b ) {
					//j is inline with an item stored
					//figure out if it's one which side of i
					if(asteroidCompare[k][1] < i[1] && j[1] < i[1]) {
						//line of sight is blocked
					} else{
						//check if there's another value on the opposite side of i
					}
				} else{
					//push j to astroid compare
				}
			}



			//x-coord of currentAsteroid is i[0]
			//y-coord of currentAsteroid is i[1]
			//x-coord of new Asteroid is j[0]
			//y-coord of new Asteroid is j[1]
			if(i[1]){}

			//count length of astroidcompare and store i if it has more astroids than the last
		}
	}
	//return bestAsteroid;
}



function m(point1, point2) {
	return (point2[1] - point1[1]) / (point2[0] - point1[0]);
}

function calculateLine(arr, asteroidCompare, mainAsteroid, newAsteroid) {
	if(asteroidCompare.length === 0){
		asteroidCompare.push(arr.slice(j, j + 1)[0]);
	}
}

function makeArrayOfAsteroids(arr) {
	let asteroids = [];
	for(i = 0; i < arr.length; i++) {
		for(j=0; j < arr[i].length; j++) {
			if(arr[i][j] === "#") {
				asteroids.push([j,i]);
			}
		}
	}
	return asteroids;
}

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

//console.log(makeArrayOfAsteroids(puzzleInput));
let testarr = [
	".#..#",
	".....",
	"#####",
	"....#",
	"...##"
];
//console.log(makeArrayOfAsteroids(testarr));
console.log(calculateBestAsteroid(makeArrayOfAsteroids(testarr)));


