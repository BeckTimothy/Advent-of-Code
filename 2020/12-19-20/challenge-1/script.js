let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.replace(/\r/gi, "").split(/\n\n/gi);
let rules = input[0].split(/\n/);
let messages = input[1].split(/\n/);

//console.log(rules);

let indexedByRuleNum = new Map();
let indexedByString = {};
const buildMaps = (rules) => {
	let solved = false;
	while(!solved) {
		for(let i = 0; i < rules.length; i++) {
			let line = rules[i].split(": ");
			let ruleNum = Number(line[0]);
			let rule = line[1];

			let reCompleted = /^"(\w)+"$/;
			let reToMerge = /^"(\w)+" \| "(\w)+"$/;
			let reFragMerge = /^"(\w)+" "(\w)+" | "(\w)+" "(\w)+"$/;

			//if line contains only a complete string
			if(reCompleted.exec(rule) !== null) {
				line = reCompleted.exec(rule)[1];
				indexedByRuleNum.set(ruleNum, line);
				indexedByString[line] = ruleNum;
				//rules[i] = "";
				if(ruleNum === 0) {
					solved = true;
					break;
				}
			}
			// if line contains two complete strings separated by a pipe
			if(reToMerge.exec(rule) !== null) {
				line = reToMerge.exec(rule);
				//console.log(line);
				indexedByRuleNum.set(ruleNum, line);
				indexedByString[line] = ruleNum;
				//rules[i] = "";
			}
			// if line contains two separate string fragments that need to be combined
			if(reFragMerge.exec(rule) !== null) {
				line = reFragMerge.exec(rule);
				//console.log(line);
				indexedByRuleNum.set(ruleNum, line);
				indexedByString[line] = ruleNum;
				//rules[i] = "";
			}

			let callback = (val, key, map) => {
				//console.log(rule.search(` ${key} `));
				console.log(rule);
				if( rule.search(` ${key} `) >= 0){
					rule = rule.replace(` ${key} `, ` "${val}" `);
					//console.log(`test`);
				}
			};
			indexedByRuleNum.forEach(callback);
			//console.log(indexedByRuleNum);
		}
	}
};
buildMaps(rules);
