let input = require("fs").readFileSync("../challenge-1/input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.replace(/\r/gi, "");

let myRegX = /(\d+)-(\d+)/gi;
let rangeArr = input.match(myRegX);
let yourTicket = input.substring(input.indexOf("your ticket:\n") +13, input.indexOf("\n\nnearby tickets:\n"));
let nearbyTickets = input.substr(input.indexOf("nearby tickets:\n")+16);
nearbyTickets = nearbyTickets.split(/\n/gi);


const removeInvalids = (nearbyTickets, rangeArr) => {
	let map = new Map();
	for(let i=0; i<rangeArr.length;i++){
		let min = Number(rangeArr[i].substring(0,rangeArr[i].indexOf("-")));
		let max = Number(rangeArr[i].substring(rangeArr[i].indexOf("-")+1));
		for(let k=min; k<max; k++){
			map.set(k,k);
		}
	}
	let count = 0;
	for(let i=0; i<nearbyTickets.length; i++) {
		nearbyTickets[i] = nearbyTickets[i].split(",");
		//console.log(nearbyTickets[i]);
		for(let j=0; j<nearbyTickets[i].length; j++){
			if(!map.has(Number(nearbyTickets[i][j]))){
				count += Number(nearbyTickets[i][j]);
				//nearbyTickets[i] = null;
				//break;
			}
		}
	}
	//nearbyTickets = nearbyTickets.sort().reverse();
	//for(let i=0; i<nearbyTickets.length; i++){
	//	if(nearbyTickets[0] === null){
	//		nearbyTickets.shift();
	//	} else{
	//		break;
	//	}
	//}
	console.log(count);
};

removeInvalids(nearbyTickets, rangeArr);
