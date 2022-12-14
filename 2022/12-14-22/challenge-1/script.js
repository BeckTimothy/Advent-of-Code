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
let sandInAbyss = false;
const nextPathBlocked = (coord) => {
    return sand.has(`x${coord[0]}y${coord[1]}`) || rocks.has(`x${coord[0]}y${coord[1]}`)
}
const spawnSand = (coord) => {
    //check if off grid
    if(coord[0]<lowestX+xOffset || coord[0]>largestX+xOffset || coord[1]>largestY+yOffset){
        sandInAbyss = true;
        return 'null';
    }

    //check below
    if(!nextPathBlocked([coord[0],coord[1]+1])){
        return spawnSand([coord[0],coord[1]+1])
    }
    //check down-left
    if(!nextPathBlocked([coord[0]-1,coord[1]+1])){
        return spawnSand([coord[0]-1,coord[1]+1])
    }
    //check down-right
    if(!nextPathBlocked([coord[0]+1,coord[1]+1])){
        return spawnSand([coord[0]+1,coord[1]+1])
    }
    return `x${coord[0]}y${coord[1]}`
}

while(!sandInAbyss){
    sand.add(spawnSand(sandSpawn));
}
if(sand.has('null'))sand.delete('null');
console.log(sand.size)