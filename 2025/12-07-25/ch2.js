const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'});
input = input.toString().trim().split('\n');
input = input.map(x => x.split(''))
let tachyonBeams = new Map;
let timelines = 0;
let splitCount = 0;
for(let i=0; i<input.length; i++){
    for(let j=0; j<input[i].length; j++){
        if(input[i][j] === 'S'){
            if(tachyonBeams.has(j)){
                tachyonBeams.set(j,tachyonBeams.get(j)+1);
            }else{
                tachyonBeams.set(j,1);
            }
        }
        if(input[i][j] === '^' && tachyonBeams.has(j)){
            splitCount++;
            let timelineCount = tachyonBeams.get(j)
            tachyonBeams.delete(j);
            if(input[i][j-1] === "."){
                if(tachyonBeams.has(j-1)){
                    tachyonBeams.set(j-1,tachyonBeams.get(j-1)+timelineCount);
                }else{
                    tachyonBeams.set(j-1,timelineCount);
                }
            }
            if(input[i][j+1] === "."){
                if(tachyonBeams.has(j+1)){
                    tachyonBeams.set(j+1,tachyonBeams.get(j+1)+timelineCount);
                }else{
                    tachyonBeams.set(j+1,timelineCount);
                }
            }
        }
    }
}
tachyonBeams.forEach(x => timelines+=x)
console.log(timelines)