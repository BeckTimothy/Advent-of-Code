const fs = require('fs');
let input = fs.readFileSync('./input.txt');
input = input.toString().trim().split('\r\n\r\n');
let pageOrderRules = input[0].split('\r\n');
let protocols = input[1].split('\r\n').map(x=>x.split(','));

let pageOrderMap = new Map()

pageOrderRules.forEach(rule => {
    rule = rule.split('|')
    if(pageOrderMap.has(rule[0])){
        let tempArr = pageOrderMap.get(rule[0])
        tempArr.add(rule[1])
        pageOrderMap.set(rule[0], tempArr)
    } else{
        let tempArr = new Set()
        tempArr.add(rule[1])
        pageOrderMap.set(rule[0], tempArr)
    }
})
const sortFc = (a, b) => {
    if(pageOrderMap.has(a) && pageOrderMap.get(a).has(b)){
        return -1
    } else if(pageOrderMap.has(b) && pageOrderMap.get(b).has(a)){
        return 1
    }
    return 0
}
let count = 0;
let countTwo = 0;
protocols.forEach(protocol => {
    let isOrdered=true;
    for(let i=1;i<protocol.length;i++){
        if(pageOrderMap.has(protocol[i])){
            let pageOrder = pageOrderMap.get(protocol[i])
            for(let j=0;j<i;j++){
                if(pageOrder.has(protocol[j])){
                    isOrdered = false
                }
            }
        }
    }
    if(isOrdered){
        count+=Number(protocol[Math.floor(protocol.length/2)])
    } else {
        let test = protocol.sort(sortFc)
        countTwo+=Number(protocol[Math.floor(test.length/2)])
    }
})
console.log(count)
console.log(countTwo)