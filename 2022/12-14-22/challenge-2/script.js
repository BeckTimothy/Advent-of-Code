const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');

//define tile symbols
const rocks = new Map();
const sand = new Set();
//find grid offsetss
let lowestX  = Infinity;
let lowestY  = Infinity;
let largestX = -Infinity;
let largestY = -Infinity;
let allPoints = input.map(x=>x.split(' -> '));
allPoints = allPoints.reduce((x,y)=>x.concat(y));
allPoints = allPoints.map(x=>eval('\[' + x + '\]'));
allPoints.push([500,0])
allPoints.forEach(x=>{
    if(  x[0] < lowestX   ) lowestX   = x[0];
    if(  x[0] > largestX  ) largestX  = x[0];
    if(  x[1] < lowestY   ) lowestY   = x[1];
    if(  x[1] > largestY  ) largestY  = x[1];
})
let xOffset = -lowestX;
let yOffset = -lowestY
let sandSpawn = [500+xOffset,yOffset]

//add rocks to grid
input.forEach(line => {
    let row = line.split(' -> ');
    row = row.map(x=>eval('\[' + x + '\]'));

    row.reduce((x,y) => {
        let firstX = x[0]+xOffset;
        let firstY = x[1]+yOffset;
        let seconX = y[0]+xOffset;
        let seconY = y[1]+yOffset;

        if(seconX < firstX || seconY < firstY){
            let tempX = seconX;
            let tempY = seconY;
            seconX = firstX;
            seconY = firstY;
            firstX = tempX;
            firstY = tempY;
        }
        for(let i=firstX; i<=seconX; i++){
            for(let j=firstY; j<=seconY; j++){
                rocks.set(`x${i}y${j}`,[i,j])
            }
        }
        return y;
    })
})
//add floor to grid
let floorFrom = ( lowestX + xOffset ) - 200;
let floorTo = largestX + xOffset + 200;
for(let i=floorFrom; i<floorTo; i++){
    rocks.set(`x${i}y${largestY + 2}`,'daaamn! Look at this floor tho!');
}

let sandPyramid = false;
const nextPathBlocked = (coord) => {
    return sand.has(`x${coord[0]}y${coord[1]}`) || rocks.has(`x${coord[0]}y${coord[1]}`)
}

class MovingSand {
    constructor(coord) {
        this.coord = coord;
        this.moving = true;
        while(this.moving === true){
            this.checkNextSpot(this.coord)
        }
    }
    checkNextSpot = () => {
        //check below
        if(!nextPathBlocked([this.coord[0],this.coord[1]+1])){
            this.coord = [this.coord[0],this.coord[1]+1]
        } //check down-left
        else if(!nextPathBlocked([this.coord[0]-1,this.coord[1]+1])){
            this.coord =[this.coord[0]-1,this.coord[1]+1]
        }//check down-right
        else if(!nextPathBlocked([this.coord[0]+1,this.coord[1]+1])){
            this.coord =[this.coord[0]+1,this.coord[1]+1]
        } else {
            sand.add(`x${this.coord[0]}y${this.coord[1]}`)
            this.moving = false
        }

        if(this.coord[0] === sandSpawn[0] && this.coord[1]=== sandSpawn[1]){
            sandPyramid = true;
        }
    }
}

while(!sandPyramid){
    new MovingSand(sandSpawn);
}
console.log(sand.size)