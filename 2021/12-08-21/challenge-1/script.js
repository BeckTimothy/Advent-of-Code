const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\n');
let count = 0;
for(let i in input){
	let temp = input[i].split('|')
		temp = temp[1].split(' ');
	temp.forEach(x=>{
		if(x.length === 2 || x.length === 3 || x.length === 4 || x.length === 7 ){
			count++
		}
	})
}
console.log(count);