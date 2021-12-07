const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\n');

let lineMap = {
    //constructor(){}
    enumerateCoord(x,y) {
       let xs = x.toString();
       let ys = y.toString();

        if(!Object.keys(this).includes(xs)){
            this[xs] = {};
        }

        if(!Object.keys(this[xs]).includes(ys)){
            this[xs][ys] = 0
        }
        this[xs][ys]+=1;
    },
    getCoord(x,y) {
        if(!Object.values(this).includes(x)){
            return 0
        }
        if(!Object.values(this[x]).includes(y)){
            return 0
        }
        return this[x][y]
    },
    getOverlappingLines() {
        let count = 0;
        Object.values(this).forEach(x => {
            Object.values(x).forEach(y => {
                if(y >= 2){
                    count++
                }
            })
        })
        return count;
    }
}

//let lineMap = new LineMap();
const createLineArr = (x1,y1,x2,y2) => {
    let arr = [];
    let deltaY = y2 - y1;
    let deltaX = x2 - x1;
    let m  = 0;
    if(deltaY !== 0 && deltaX !== 0) {
        m  = (y2 - y1) / (x2 - x1);
        let yIntercept = (x1 * m) + (y1 * -1)
        for(let i = x1; i !== x2 + Math.sign(deltaX);i+=Math.sign(deltaX)){
            let newX = i;
            let newY = (m*i) + ( yIntercept * -1);
            arr.push([newX, newY])
        }
    } else  if(deltaY === 0 && deltaX === 0){
        arr.push([x1,y1])
    }else if(deltaY === 0) {
        //push all value pairs if horizontal line
        for(let i = x1; i !== x2 + Math.sign(deltaX); i+=Math.sign(deltaX) ){
            arr.push([i,y1])
        }
    } else if(deltaX === 0){
        //push all value pairs if vertical line
        for(let i = y1; i !== y2 + Math.sign(deltaY); i+=Math.sign(deltaY) ){
            arr.push([x1,i])
        }
    }
    return arr;
}

input.forEach(line => {
    line = line.split(' -> ');
    //get x,y coord pairs from input
    xOne = Number(line[0].substring(0,line[0].indexOf(',')));
    yOne = Number(line[0].substring(line[0].indexOf(',')+1,line[0].length));
    xTwo = Number(line[1].substring(0,line[1].indexOf(',')));
    yTwo = Number(line[1].substring(line[1].indexOf(',')+1,line[1].length));

    //create array of points on line
    let pointsArr = createLineArr(xOne,yOne,xTwo,yTwo);

    //plot line
    pointsArr.forEach(point => {
        lineMap.enumerateCoord(point[0],point[1]);
    })
})

console.log(lineMap.getOverlappingLines());

