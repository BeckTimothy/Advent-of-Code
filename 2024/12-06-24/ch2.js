const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
input = input.map(x=>x.split(''))

let pointer;
let count = 0;
for(let y=0;y<input.length;y++){
    for(let x=0;x<input[y].length;x++){
        if(input[y][x]==='^'){
            pointer = [y,x];
            x=input[y].length-1
            y=input.length-1
        }
    }
}
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
while (!solved){
    console.log(pointer)
    console.log(input[pointer[0]][pointer[1]])
    console.log(direction)
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
console.log(count)