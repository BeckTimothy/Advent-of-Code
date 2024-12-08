const fs = require('fs');
let _input = fs.readFileSync('./input.txt');
_input = _input.toString().trim().split('\r\n');
let input = _input.map(x=>x.split(''))
//build map of antennas
let antennaMap  = new Map()
input.forEach((row, y)=>{
    row.forEach((item, x)=>{
        if(item !== "."){
            if(antennaMap.has(item)){
                let temp = antennaMap.get(item)
                temp = temp.add(`[${y},${x}]`)
                antennaMap.set(item, temp)
            } else{
                let temp = new Set()
                temp = temp.add(`[${y},${x}]`)
                antennaMap.set(item, temp)
            }
        }
    })
})
//set out of bounds limit and helper function for checking if a point is outside table
let xLimit = input[0].length-1;
let yLimit = input.length-1
const isInbound = (arr) => {
    return arr[0]<=yLimit  && arr[1]<=xLimit && arr[0]>=0 && arr[1]>=0
    }
let antennaList = antennaMap.keys();
let antinodeSet = new Set()
antennaList.forEach(antennaType =>{
    let coordList = Array.from(antennaMap.get(antennaType)).map(x=>eval(x))
    for(let i=0;i<coordList.length-1;i++){
        for(let j=i+1;j<coordList.length;j++){
            let tempOne = [coordList[i][0],coordList[i][1]]
            let tempTwo = [coordList[j][0],coordList[j][1]]
            let yDiff = tempOne[0] - tempTwo[0];
            let xDiff = tempOne[1] - tempTwo[1];
            tempOne[0] += yDiff
            tempOne[1] += xDiff
            tempTwo[0] -= yDiff
            tempTwo[1] -= xDiff
            if(isInbound(tempOne)){
                antinodeSet.add('['+tempOne.toString('')+']')
            }
            if(isInbound(tempTwo)){
                antinodeSet.add('['+tempTwo.toString('')+']')
            }
        }
    }

})
console.log(antinodeSet.size)