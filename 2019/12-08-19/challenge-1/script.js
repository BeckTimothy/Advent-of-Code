/**
 * This is challenge 1 of 2019-12-08 of Advent of Code's 25-day challenge
 * See the readme for an explanation
 *
 * @author Timothy Beck <Dev@TimothyBeck.com>
 */


function splitLayers(arr, layerLength, layerHeight) {
	let layers = [];
	let emptyArr = [];
	let numbOfLayers = arr.length / (layerHeight * layerLength);
	let currentLayer = 0;
	let inc = -1;

	for(i = 0; i < numbOfLayers; i++) {
		//calculate which layer we are populating
		currentLayer = Math.floor((i / (layerHeight * layerLength)));
		//create new empty array in layer array if a new array is needed
		//layers.push(emptyArr);
		//push array item at i to current layer
		layers[i] = arr.substr( (i * layerLength * layerHeight), (layerHeight * layerLength) );
	}
	return layers;
}

testInput = "123456789012";
testArr = testInput.split("");
//console.log(testArr);
console.log(splitLayers(testInput,3,2));

puzzleInput = "";
puzzleArr = puzzleInput.split("");
splitLayers(puzzleArr,25,6);