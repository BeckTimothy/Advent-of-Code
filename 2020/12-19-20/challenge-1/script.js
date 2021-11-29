let input = require("fs").readFileSync("../challenge-1/testinput.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.replace(/\r/gi, "").split(/\n\n/gi);
let rules = input[0].split(/\n/);
let messages = input[1].split(/\n/);

//console.log(rules);

let indexedByRuleNum = new Map();
let indexesByLetter = new Map();
let reCompleted = /^"(\w)+"$/;
let reDigit = /^(\d)+$/;


//replaces all refrences to the key with the value from the provided map of arrays
const replaceRefs = (refKey, refValue) => {
	//replace all the references to keyed characters with the characters.

	for(let i = 0; i < indexedByRuleNum.size; i++) {
		let thisRule = indexedByRuleNum.get(i)
		for(let j = 0; j < thisRule.length; j++) {
			if(thisRule[j] === refKey.toString()) {
				//console.log(`replacing ${refKey} in ${thisRule[j]} with ${refValue}`)
				thisRule[j] = refValue;
			}
		}
	}
}

const mergeStrings = (rule) => {
	let temp = rule;
	const noNums = (x) => reDigit.exec(x) === null;
	if(temp.every(noNums)){
		temp = temp.join('')
		temp.split('|');
	}
	console.log(temp)
	return temp;
}

mergeStrings([ 'a', 'a', '|', 'b', 'b' ]);
mergeStrings([ 'a', 'a', '|', 'b', '8' ]);

const buildMaps = (rules) => {
	let solved = false;

	//format all of the rules into a Map by their respective rule numbers
	for(let i = 0; i < rules.length; i++) {
		let line = rules[i].split(": ");
		let ruleNum = Number(line[0]);
		let rule = line[1];
		indexedByRuleNum.set(ruleNum, rule.split(" "))
		//if this rule is solely a letter. Add its index to the indexes by letter.
		if(reCompleted.exec(rule) !== null){
			rule = rule.slice(1,-1)
			//console.log(`adding "${rule}" to index of keys at index: ${rule} with value: ${i}`);
			if(typeof indexesByLetter.get(rule) != "undefined"){
				let tmp = indexesByLetter.get(rule)
				tmp.push(i);
				console.log(`adding "${rule}" to index of keys at index: ${rule} with value: `);
				console.log(tmp);
				indexesByLetter.set(rule, tmp)
				replaceRefs(i,rule);
			} else {
				console.log(`adding "${rule}" to index of keys at index: ${rule} with value: ${i}`);
				indexesByLetter.set(rule, [i]);
				replaceRefs(i,rule);
			}
		}
	}







	while(!solved) {


		//loop through a targetted rule, if the rule starts with a number, see if it refrences a rule that is only a word.
		//for(let i = 0; i < indexedByRuleNum.size; i++) {
		//	let thisRule = indexedByRuleNum.get(i)
		//	for(let j = 0; j < thisRule.length; j++) {
		//		if(indexedByRuleNum.get(i)[j][0] !== '|' && indexedByRuleNum.get(i)[j][0] !== '\"') {
		//			let refIndex = Number(indexedByRuleNum.get(i)[j])
//
		//			//if referenced rule is solely a string, replace the refrence with the string.
		//			if(indexedByRuleNum.get(refIndex).length === 1 && reCompleted.exec(indexedByRuleNum.get(refIndex)[0]) !== null){
//
		//			}
		//			console.log();
		//			console.log(indexedByRuleNum.get(i)[j][0]);
		//			console.log("\n");
		//		}
		//	}
		//}
			// let reCompleted = /"(\w)+"/;
			// let reToMerge = /^"(\w)+" \| "(\w)+"$/;
			// let reFragMerge = /^"(\w)+" "(\w)+" | "(\w)+" "(\w)+"$/;
			//
			// //if line contains only a complete string
			// if(reCompleted.exec(rule) !== null) {
			// 	line = reCompleted.exec(rule)[1];
			// 	indexedByRuleNum.set(ruleNum, line);
			// 	indexedByString[line] = ruleNum;
			// 	//rules[i] = "";
			// 	if(ruleNum === 0) {
			// 		solved = true;
			// 		break;
			// 	}
			// }
			// // if line contains two complete strings separated by a pipe
			// if(reToMerge.exec(rule) !== null) {
			// 	line = reToMerge.exec(rule);
			// 	//console.log(line);
			// 	indexedByRuleNum.set(ruleNum, line);
			// 	indexedByString[line] = ruleNum;
			// 	//rules[i] = "";
			// }
			// // if line contains two separate string fragments that need to be combined
			// if(reFragMerge.exec(rule) !== null) {
			// 	line = reFragMerge.exec(rule);
			// 	//console.log(line);
			// 	indexedByRuleNum.set(ruleNum, line);
			// 	indexedByString[line] = ruleNum;
			// 	//rules[i] = "";
			// }
			//
			 //let callback = (val, key, map) => {
			 //	//console.log(rule.search(` ${key} `));
			 //	console.log(val);
			 //	//if( rule.search(` ${key} `) >= 0){
			 //	//	rule = rule.replace(` ${key} `, ` "${val}" `);
			 //	//	//console.log(`test`);
			 //	//}
			 //};
			 //indexedByRuleNum.forEach(callback);
			// //console.log(indexedByRuleNum);

	}
};
//buildMaps(rules);


