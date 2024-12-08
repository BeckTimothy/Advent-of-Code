const fs = require('fs');
let _input = fs.readFileSync('./input.txt');
_input = _input.toString().trim().split('\r\n');
let input = _input.map(x=>x.split(''));


let _pointer;
let count = 0;
for(let y=0;y<input.length;y++){
    for(let x=0;x<input[y].length;x++){
        if(input[y][x]==='^'){
            _pointer = [y,x];
            x=input[y].length-1
            y=input.length-1
        }
    }
}
let pointer = _pointer;

const yLimit = input.length-1;
const xLimit = input[0].length-1;
const counter = (y,x) =>{
    if(input[y][x]!=='X')count++
}
let solved = false;
let direction = 'up';
const getNextDir = (dir) => {
    switch(dir) {
        case 'up':
            return 'right';
        case 'right':
            return 'down';
        case 'down':
            return 'left';
        case 'left':
            return 'up';
        default:
            return 'WTF?';
    }
}
let visitedLocations = new Set()
let betterObstructionCount = 0;
while (!solved){
    visitedLocations.add('['+pointer[0]+','+pointer[1]+']')
    if(direction==='up'){
        try{
            if(input[pointer[0]-1][pointer[1]] === '#'){
                direction = getNextDir('up');
            } else{
                counter(pointer[0],pointer[1])
                input[pointer[0]][pointer[1]] = 'X';
                if(pointer[0]===0){
                    solved = true;
                } else{
                    pointer = [pointer[0]-1,pointer[1]];
                }
            }
        } catch {
            counter(pointer[0],pointer[1])
            solved = true;
        }
    } else if(direction==='right'){
        try{
            if(input[pointer[0]][pointer[1]+1] === '#') {
                direction = getNextDir('right');
            } else {
                counter(pointer[0],pointer[1])
                input[pointer[0]][pointer[1]] = 'X';

                if(pointer[1]===xLimit){
                    solved = true;
                } else{
                    pointer = [ pointer[0],pointer[1]+1 ]
                }
            }
        } catch {
            counter(pointer[0], pointer[1])
            solved = true;
        }
    } else if(direction==='down'){
        try{
            if(input[pointer[0]+1][pointer[1]] === '#'){
                direction = getNextDir('down');
            } else {
                counter(pointer[0], pointer[1])
                input[pointer[0]][pointer[1]] = 'X';

                if (pointer[0] === yLimit) {

                } else {
                    pointer = [pointer[0]+1, pointer[1]]
                }
            }
        } catch{
            counter(pointer[0], pointer[1])
            solved = true;
        }
    } else if(direction==='left'){
        try{
            if(input[pointer[0]][pointer[1]-1] === '#'){
                direction = getNextDir('left');
            } else {
                counter(pointer[0], pointer[1])
                input[pointer[0]][pointer[1]] = 'X';

                if (pointer[1] === 0) {
                    solved = true;
                } else {
                    pointer = [pointer[0], pointer[1]-1]
                }
            }
        } catch {
            counter(pointer[0], pointer[1])
            solved = true;
        }
    }
}

visitedLocations.delete('['+_pointer[0]+','+_pointer[1]+']')

Array.from(visitedLocations).forEach((newObstruction, index)=>{
    pointer = [..._pointer];
    input = _input.map(x=>x.split(''));
    //console.log("\n\n\n")
    //console.log(newObstruction)
    newObstruction = eval(newObstruction)
    //console.log(newObstruction)
    input[newObstruction[0]][newObstruction[1]]='#'
    //console.log(input.map(x=>x.join("")).join("\n"))
    solved = false;
    direction = 'up';
    let obstructions = new Map();
    //console.log(obstructions)
    let canLoop = false;
    while (!solved){

        if(direction==='up'){
            try{
                if(input[pointer[0]-1][pointer[1]] === '#'){
                    direction = getNextDir('up');
                    if(obstructions.has('['+pointer[0]+','+pointer[1]+']')
                        && obstructions.get('['+pointer[0]-1+','+pointer[1]+']') === '['+pointer[0]-1+','+pointer[1]+']'){
                        solved=true;
                        canLoop=true;
                    }
                    obstructions.set('['+pointer[0]+','+pointer[1]+']','['+(pointer[0]-1)+','+pointer[1]+']')
                } else{
                    counter(pointer[0],pointer[1])
                    input[pointer[0]][pointer[1]] = 'X';
                    if(pointer[0]===0){
                        solved = true;
                    } else{
                        pointer = [pointer[0]-1,pointer[1]];
                    }
                }
            } catch {
                counter(pointer[0],pointer[1])
                solved = true;
            }
        } else if(direction==='right'){
            try{
                if(input[pointer[0]][pointer[1]+1] === '#') {
                    direction = getNextDir('right');
                    if(obstructions.has('['+pointer[0]+','+(pointer[1])+']')
                       && obstructions.get('['+pointer[0]+','+(pointer[1])+']') === '['+pointer[0]+','+(pointer[1]+1)+']'){
                        solved=true;
                        canLoop=true;
                    }
                    obstructions.set('['+pointer[0]+','+(pointer[1])+']','['+pointer[0]+','+(pointer[1]+1)+']')
                } else {
                    counter(pointer[0],pointer[1])
                    input[pointer[0]][pointer[1]] = 'X';

                    if(pointer[1]===xLimit){
                        solved = true;
                    } else{
                        pointer = [ pointer[0],pointer[1]+1 ]
                    }
                }
            } catch {
                counter(pointer[0], pointer[1])
                solved = true;
            }
        } else if(direction==='down'){
            try{
                if(input[pointer[0]+1][pointer[1]] === '#'){
                    direction = getNextDir('down');
                    if(obstructions.has('['+(pointer[0])+','+pointer[1]+']')
                        && obstructions.get('['+(pointer[0])+','+pointer[1]+']') === '['+(pointer[0]+1)+','+pointer[1]+']'){
                        solved=true;
                        canLoop=true;
                    }
                    obstructions.set('['+(pointer[0]+1)+','+pointer[1]+']','['+(pointer[0]+1)+','+pointer[1]+']')
                } else {
                    counter(pointer[0], pointer[1])
                    input[pointer[0]][pointer[1]] = 'X';

                    if (pointer[0] === yLimit) {

                    } else {
                        pointer = [pointer[0]+1, pointer[1]]
                    }
                }
            } catch{
                counter(pointer[0], pointer[1])
                solved = true;
            }
        } else if(direction==='left'){
            try{
                if(input[pointer[0]][pointer[1]-1] === '#'){
                    direction = getNextDir('left');
                    if(obstructions.has('['+pointer[0]+','+(pointer[1])+']')
                        && obstructions.get('['+pointer[0]+','+(pointer[1])+']') === '['+pointer[0]+','+(pointer[1]-1)+']'){
                        solved=true;
                        canLoop=true;
                    }
                    obstructions.set('['+pointer[0]+','+(pointer[1])+']','['+pointer[0]+','+(pointer[1]-1)+']')
                } else {
                    counter(pointer[0], pointer[1])
                    input[pointer[0]][pointer[1]] = 'X';

                    if (pointer[1] === 0) {
                        solved = true;
                    } else {
                        pointer = [pointer[0], pointer[1]-1]
                    }
                }
            } catch {
                counter(pointer[0], pointer[1])
                solved = true;
            }
        }
    }

    if(canLoop){
        betterObstructionCount++
    }
    //console.log("----------")
    //console.log(input.map(x=>x.join("")).join("\n"))
    //console.log(`${betterObstructionCount} loops found at ${index} of ${visitedLocations.size}`)
})


console.log(betterObstructionCount)
