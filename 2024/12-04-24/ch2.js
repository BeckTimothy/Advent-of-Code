const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
input = input.map(x=>x.trim().split(''))

let xmasCount = 0;
for(let y=0;y<input.length;y++){
    for(let x=0;x<input[y].length;x++){
        if(input[y][x] === 'A'
            && y>0 && y<input.length-1
            && x>0 && x<input[y].length-1){

            //Diagonal
            if(     (  ( input[y-1][x-1] === 'M' && input[y+1][x+1] === 'S' )  // nw<->se MAS
                    || ( input[y-1][x-1] === 'S' && input[y+1][x+1] === 'M' )) // nw<->se SAM
                &&  (  ( input[y-1][x+1] === 'M' && input[y+1][x-1] === 'S' )  // ne<->sw MAS
                    || ( input[y-1][x+1] === 'S' && input[y+1][x-1] === 'M' )) // ne<->sw SAM
            ){xmasCount++}
            //horizontal + vertical
            //if(     (  ( input[y][x-1] === 'M' && input[y][x+1] === 'S' )   // w<->e MAS
            //        || ( input[y][x-1] === 'S' && input[y][x+1] === 'M' ))  // w<->e SAM
            //    &&  (  ( input[y-1][x] === 'M' && input[y+1][x] === 'S' )   // n<->s MAS
            //        || ( input[y-1][x] === 'S' && input[y+1][x] === 'M' ))  // n<->s SAM
            //){xmasCount++}
        }
    }
}

console.log(xmasCount)
