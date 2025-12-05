const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'});
//input = "3-5\n" +
//    "10-14\n" +
//    "16-20\n" +
//    "12-18\n" +
//    "\n" +
//    "1\n" +
//    "5\n" +
//    "8\n" +
//    "11\n" +
//    "17\n" +
//    "32"
input = input.split('\n\n');
let idRanges = input[0].split('\n');

for(let i=0; i< idRanges.length; i++){
    let temp = idRanges[i].split('-')
    let rangeOneMin = Number(temp[0]);
    let rangeOneMax = Number(temp[1]);

    for(let j=0; j< idRanges.length; j++){
        let temp = idRanges[j].split('-')
        let rangeTwoMin = Number(temp[0]);
        let rangeTwoMax = Number(temp[1]);

        if(rangeTwoMin <= rangeOneMin && rangeTwoMax >= rangeOneMin && rangeTwoMax <= rangeOneMax){
            //replace with range two min and range one max
            idRanges[j] = rangeTwoMin.toString()+'-'+rangeOneMax.toString();
            idRanges[i] = rangeTwoMin.toString()+'-'+rangeOneMax.toString();
        }
        if(rangeTwoMin <= rangeOneMin && rangeTwoMax >= rangeOneMax){
            //replace both with range two
            idRanges[j] = rangeTwoMin.toString()+'-'+rangeTwoMax.toString();
            idRanges[i] = rangeTwoMin.toString()+'-'+rangeTwoMax.toString();
        }
        if(rangeTwoMax >= rangeOneMax && rangeTwoMin <= rangeOneMax && rangeTwoMin >= rangeOneMin){
            //replace with range one min and range two max
            idRanges[j] = rangeOneMin.toString()+'-'+rangeTwoMax.toString();
            idRanges[i] = rangeOneMin.toString()+'-'+rangeTwoMax.toString();
        }
        if(rangeOneMin <= rangeTwoMin && rangeOneMax >= rangeTwoMax){
            //replace both with range one
            idRanges[j] = rangeOneMin.toString()+'-'+rangeOneMax.toString();
            idRanges[i] = rangeOneMin.toString()+'-'+rangeOneMax.toString();
        }
    }
}
let uniq = [...new Set(idRanges)];
let count = 0;
uniq.forEach(range => {
    range = range.split("-");
    count+=(Number(range[1])-Number(range[0]))+1
})
console.log(count)