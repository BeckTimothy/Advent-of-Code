const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().split(',');

const solveChallengeOne = () => {
    //initialize school
    let school = [];
    let newFish = [];
    class fishy {
        constructor(spawnTimeCount) {
            this.spawnTimeCount = spawnTimeCount;
        }
        ageOneDay() {
            this.spawnTimeCount -= 1;
            if(this.spawnTimeCount < 0){
                this.spawn();
            }
        }
        spawn() {
            this.spawnTimeCount = 6;
            newFish.push(spawnNewFishy(8));
        }
    }
    const spawnNewFishy = (age) => {
        return new fishy(age)
    }
    //add inputs to school
    for(let i in input){
        school.push(spawnNewFishy(Number(input[i])))
    }
    //loop 80 days
    for (let day = 1; day <= 80; day++) {
        for(let i in school){
            school[i].ageOneDay();
        }
        school = school.concat(newFish);
        newFish = [];
    }
    return `Challenge 1: ${school.length}`;
}

const solveChallengeTwo=()=>{
    //initialize school
    let fishCount = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};
    //add inputs to school
    input.forEach(x => fishCount[Number(x)]++ )
    //loop 256 days
    for (let day = 1; day <= 256; day++) {
        let fishToSpawn = fishCount[0];
        fishCount[0] = fishCount[1];
        fishCount[1] = fishCount[2];
        fishCount[2] = fishCount[3];
        fishCount[3] = fishCount[4];
        fishCount[4] = fishCount[5];
        fishCount[5] = fishCount[6];
        fishCount[6] = fishCount[7] + fishToSpawn;
        fishCount[7] = fishCount[8];
        fishCount[8] = fishToSpawn;
    }
    //sum fish quantities after spawn period
    return `Challenge 2: ${Object.values(fishCount).reduce((x,y)=>x+y)}`
}

console.log(solveChallengeTwo());
console.log(solveChallengeOne());