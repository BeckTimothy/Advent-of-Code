const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
input = input.map(x=>x.split(''))
let start = new Date()
console.log(start)
let xmasCount = 0;
for(let y=0;y<input.length;y++){
    for(let x=0;x<input[y].length;x++){
        if(input[y][x] === 'X'){
            if( y>2
                && x>2
                && input[y-1][x-1] === 'M'
                && input[y-2][x-2] === 'A'
                && input[y-3][x-3] === 'S'){xmasCount++}//nw
            if( y>2
                && input[y-1][x] === 'M'
                && input[y-2][x] === 'A'
                && input[y-3][x] === 'S'){xmasCount++}//n
            if( y>2
                && x<input[y].length-3
                && input[y-1][x+1] === 'M'
                && input[y-2][x+2] === 'A'
                && input[y-3][x+3] === 'S'){xmasCount++}//ne

            if( x>2
                && input[y][x-1] === 'M'
                && input[y][x-2] === 'A'
                && input[y][x-3] === 'S'){xmasCount++}//w

            if( x<input[y].length-3
                && input[y][x+1] === 'M'
                && input[y][x+2] === 'A'
                && input[y][x+3] === 'S'){xmasCount++}//e

            if( y<input.length-3
                && x>2
                && input[y+1][x-1] === 'M'
                && input[y+2][x-2] === 'A'
                && input[y+3][x-3] === 'S'){xmasCount++}//sw
            if( y<input.length-3
                && input[y+1][x] === 'M'
                && input[y+2][x] === 'A'
                && input[y+3][x] === 'S'){xmasCount++}//s
            if( y<input.length-3
                && x<input[y].length-3
                && input[y+1][x+1] === 'M'
                && input[y+2][x+2] === 'A'
                && input[y+3][x+3] === 'S'){xmasCount++}//se
        }
    }
}

console.log(xmasCount)
console.log(new Date())