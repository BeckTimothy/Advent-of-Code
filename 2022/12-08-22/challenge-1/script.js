const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');

const forestHeight = input.length;
const forestWidth = input[0].length;
let count = 0;
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
        let isVisibleLeft = !treesToTheLeftOfMe.filter(trees => Number(trees) >= treeHeight).length > 0;
        let isVisibleRight = !treesToTheRight.filter(trees => Number(trees) >= treeHeight).length > 0;
        let isVisibleNorth = !treesNorth.filter(trees => Number(trees) >= treeHeight).length > 0;
        let isVisibleSouth = !treesSouth.filter(trees => Number(trees) >= treeHeight).length > 0;
        let isVisible = isVisibleLeft || isVisibleRight || isVisibleNorth || isVisibleSouth;
        if(isVisible) count++
    }
}
console.log(count)