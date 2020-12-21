let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
input = input.replace(/\r/gi, "");
let myRegX = /(\d+)-(\d+)/gi;
let rangeArr = input.match(myRegX);
let yourTicket = input.substring(input.indexOf("your ticket:\n") + 13, input.indexOf("\n\nnearby tickets:\n")).split(',');
let nearbyTickets = input.substr(input.indexOf("nearby tickets:\n") + 16);
nearbyTickets = nearbyTickets.split(/\n/gi);
const removeInvalids = (nearbyTickets, rangeArr) => {
    let map = new Map();
    for (let i = 0; i < rangeArr.length; i++) {
        let min = Number(rangeArr[i].substring(0, rangeArr[i].indexOf("-")));
        let max = Number(rangeArr[i].substring(rangeArr[i].indexOf("-") + 1));
        for (let k = min; k < max; k++) {
            map.set(k, k);
        }
    }
    for (let i = 0; i < nearbyTickets.length; i++) {
        nearbyTickets[i] = nearbyTickets[i].split(",");
        for (let j = 0; j < nearbyTickets[i].length; j++) {
            if (!map.has(Number(nearbyTickets[i][j]))) {
                nearbyTickets[i] = null;
                break;
            }
        }
    }
    nearbyTickets = nearbyTickets.sort().reverse();
    for (let i = 0; i < nearbyTickets.length; i++) {
        if (nearbyTickets[0] === null) {
            nearbyTickets.shift();
        } else {
            break;
        }
    }
    return (nearbyTickets);
};
const buildMap = (input) => {
    let map = new Map();
    let ticketLineRegEx = /((\w+):\s|(\w+)\s(\w+):\s)(\d+)-(\d+)\sor\s(\d+)-(\d+)/gi;
    let rangeLines = input.match(ticketLineRegEx);
    for (let i = 0; i < rangeLines.length; i++) {
        let tag = rangeLines[i].substring(0, rangeLines[i].indexOf(":"));
        let rangeArr = rangeLines[i].match(myRegX);
        let minOne = Number(rangeArr[0].substring(0, rangeArr[0].indexOf("-")));
        let maxOne = Number(rangeArr[0].substring(rangeArr[0].indexOf("-") + 1));
        let minTwo = Number(rangeArr[1].substring(0, rangeArr[1].indexOf("-")));
        let maxTwo = Number(rangeArr[1].substring(rangeArr[1].indexOf("-") + 1));
        for (let j = minOne; j <= maxOne; j++) {
            if (map.has(j)) {
                let temp = map.get(j);
                temp.push(tag);
                map.set(j, temp);
            } else {
                let temp = [tag];
                map.set(j, temp)
            }
        }
        for (let j = minTwo; j <= maxTwo; j++) {
            if (map.has(j)) {
                let temp = map.get(j);
                temp.push(tag);
                map.set(j, temp);
            } else {
                let temp = [tag];
                map.set(j, temp)
            }
        }
    }
    return map;
};
const ticketFieldsFound = (arr) => {
    return arr.includes('departure location') &&
        arr.includes('departure station') &&
        arr.includes('departure platform') &&
        arr.includes('departure track') &&
        arr.includes('departure date') &&
        arr.includes('departure time');
};
const reduceTickets = (ticketArr, typeMap) => {
    let ticketFields = [];
    do {
    	for(let i=0; i<ticketArr[0].length; i++){
    		if(ticketFields.length <= i) {
    			ticketFields[i] = null;
			}
    		if(typeof ticketFields[i] === "string"){
    			for(let j=0; j<ticketFields.length; j++){
    				if(typeof ticketFields[j] === "object"){
    					if(ticketFields[j].includes(ticketFields[i])){
							ticketFields[j].splice(ticketFields[j].indexOf(ticketFields[i]),1);
						}
					}
				}
    			continue;
			}
			for(let j=0; j<ticketArr.length; j++){
				let tags = typeMap.get(Number(ticketArr[j][i]));
				if(ticketFields[i] === null){
					ticketFields[i] = [];
					tags.forEach((x)=>{ticketFields[i].push(x)});
				}
				for(let k=0;k<ticketFields[i].length;k++){
					if(!tags.includes(ticketFields[i][k])){
						ticketFields[i].splice(k,1);
					}
				}
			}
			if(ticketFields[i] !== null && ticketFields[i].length === 1){
				ticketFields[i] = ticketFields[i][0];
			}
		}
    } while (!ticketFieldsFound(ticketFields));
    for(let i=0; i<ticketFields.length; i++){
    	if(!ticketFields[i].includes("departure")) {
    		ticketFields[i] = null;
		}
	}
    return ticketFields;
};
const ticketFormat = reduceTickets(removeInvalids(nearbyTickets, rangeArr), buildMap(input));
const solve = (myTicket, departArray) => {
	let count = 1;
	for(let i=0; i<departArray.length; i++){
		if(departArray[i] !== null){
			count *= Number(myTicket[i]);
		}
	}
	return	count;
};
console.log(solve(yourTicket, ticketFormat));