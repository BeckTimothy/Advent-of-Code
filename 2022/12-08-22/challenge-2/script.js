const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');

const forestHeight = input.length;
const forestWidth = input[0].length;
let bestScore = 0;
for(let i=0;i<forestHeight;i++){
    for(let j=0;j<forestWidth;j++) {
        let treeHeight = Number(input[i].charAt(j));
        //get trees in row
        let treesToTheLeftOfMe = input[i].substring(0,j).split('');
        let treesToTheRight = input[i].substring(j+1).split('');
        //get trees in column
        let treesNorth = [];
        let treesSouth = [];
        for(let k=0; k<forestWidth ;k++){
            if( k < i ) { treesNorth.push(input[k][j]) }
            if( k > i ) { treesSouth.push(input[k][j]) }
        }
        //check if visible from each direction
        const countVisTrees = (treeHeight, arr) => {
            let thisDirectionCount = 0
            let isBlocked = false;
            arr.forEach(tree => {
                if(!isBlocked){
                    if(Number(tree) < treeHeight) thisDirectionCount++
                    if(Number(tree) >= treeHeight){
                        thisDirectionCount++
                        isBlocked = true
                    }
                }
            })
            return thisDirectionCount
        }
        let treeCountLeft = countVisTrees(treeHeight, treesToTheLeftOfMe.reverse());
        let treeCountRight = countVisTrees(treeHeight, treesToTheRight);
        let treeCountNorth = countVisTrees(treeHeight, treesNorth.reverse());
        let treeCountSouth = countVisTrees(treeHeight, treesSouth);
        let treeCount = treeCountLeft * treeCountRight * treeCountNorth * treeCountSouth;
        if(treeCount > bestScore) bestScore=treeCount;
    }
}
console.log(bestScore)