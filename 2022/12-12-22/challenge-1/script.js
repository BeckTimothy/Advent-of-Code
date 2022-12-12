const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n');
input = input.map(x => x.split(''));

const locations = new Map();
const foreignLocations = [];
let endFound = false;
//create Location factory
class Location {
    constructor(xPos, yPos, distance) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.heightVal = null;
        this.distanceFromStart = distance;
        this.isFinish = false;
        this.identify(input[this.yPos][this.xPos]);
    }
    traverseLocation = () => {
        this.traversed = true;
        //loop through neighboring locations, checking if they are passable
        for(let y=this.yPos-1;y<=this.yPos+1;y++){
            //if location is out of bounds
            if(y<0 || y>input.length-1)continue;
            for(let x=this.xPos-1;x<=this.xPos+1;x++){

                //if location is out of bounds
                if(x<0 || x>input[0].length-1)continue;

                //if location is current location
                if(x===this.xPos && y===this.yPos)continue;


                //if location has been found
                if(foreignLocations.some(item=>(item.xPos===x && item.yPos===y)))continue;

                //if moving diagonally
                if(Math.abs(this.xPos - x) === 1 && Math.abs(this.yPos - y) === 1 )continue;

                //is there a shorter route
                if(locations.get(`x${x}y${y}`)?.distanceFromStart <= this.distanceFromStart)continue;

                let locationValue = input[y][x];
                if(locationValue === 'S'){
                    locationValue = 'a';
                }
                else if (locationValue === 'E'){
                    locationValue = 'z';
                }
                let isLocationReachable = this.heightVal - locationValue.charCodeAt(0) >= -1
                if(isLocationReachable){
                    foreignLocations.push(new Location(x,y,this.distanceFromStart+1));
                }
            }
        }

        if(this.isFinish){
            locations.set('end',this)
            endFound = true;
        }else {
            locations.set(`x${this.xPos}y${this.yPos}`,this)
        }
    }
    identify = () => {
        let value = input[this.yPos][this.xPos];
        if(value === 'S'){
            value = 'a';
            this.distanceFromStart = 0;
        }
        else if (value === 'E'){
            value = 'z';
            this.isFinish = true;
        }
        this.heightVal = value.charCodeAt(0);
    }
}

//find start
for(let i=0;i<input.length;i++){
    for(let j=0;j<input[i].length;j++){
        if(input[i][j]==='S'){
            foreignLocations.push(new Location(j,i,0));

        }
    }
}

while(!endFound){
    foreignLocations[0].traverseLocation();
    foreignLocations.shift()
}

console.log(locations.get('end'))