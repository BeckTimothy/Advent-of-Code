const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n\r\n');

//create monkees
class Monkee {
    constructor(items, operation, test, ifTrue, ifFalse) {
        this.falseMonkee = Number(ifFalse.split('monkey ')[1]);
        this.trueMonkee = Number(ifTrue.split('monkey ')[1]);
        this.testNum = Number(test.split('by ')[1]);
        operation = operation.split('= ')[1];
        this.valOne = operation.split(' ')[0];
        this.valTwo = operation.split(' ')[2];
        this.operation = operation.split(' ')[1];
        items = items.split(': ')[1].split(', ');
        items = items.map(x=>Number(x));
        this.items = items;
        this.count = 0
    }
    inspect = () => {
        this.count+=1;
    }
}
input = input.map(x=>x.split('\r\n'))
let monkees = [];
for(let i=0;i<input.length;i++){
    monkees.push(new Monkee(input[i][1],input[i][2],input[i][3],input[i][4],input[i][5]))
}

//create LCM of divisers
let LCM = 1;
monkees.forEach(x=>{
    LCM = LCM % x.testNum === 0? LCM : LCM * x.testNum;
})

//loop through rounds
for(let r=0;r<10000;r++){
    //loop through turns for this round
    for(let t=0;t<monkees.length;t++){
        //loop through all items this monkee has
        while(monkees[t].items.length>0){
            //logic to perform worryness operation
            let item = monkees[t].items.shift();
            let value = monkees[t].valTwo==='old'?item:Number(monkees[t].valTwo);
            item = monkees[t].operation==="+"?item+value:item*value;

            //reduce item by LCM
            item = item % LCM;
            //increment this monkees inspection count
            monkees[t].inspect();

            //throw item to next monkee logic
            if(item % monkees[t].testNum === 0){
                monkees[monkees[t].trueMonkee].items.push(item)
            }else{
                monkees[monkees[t].falseMonkee].items.push(item)
            }
        }
    }
}
monkees = monkees.sort((a,b)=>{return b.count - a.count})
let monkeeBusiness = monkees[1].count * monkees[0].count;
console.log(monkeeBusiness)


