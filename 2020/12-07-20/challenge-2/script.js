let input = require("fs").readFileSync("../challenge-1/input.txt", {encoding: "utf-8", flag: 'r'}).trim();
const input = input.split(/\n/);
function solve(input) {
    const rules = {};
    input.forEach((rule) => {
        const parentRegex = /(\w+ \w+) bags contain/;
        const childRegex = /(\d+) (\w+ \w+) bags?/g;
        //regex exec returns an array of different stats about the executed regex
        let regex = parentRegex.exec(rule);
        const parent = regex[1];
        rules[parent] = [];
        const children = rule.substr(regex[0].length);
        while ((regex = childRegex.exec(children))) {
            //push an array of the children bags and their count into the object w/ the parent as the key
            rules[parent].push([regex[2], +regex[1]]);
        }
    });
    //recursive count of bags shiny gold bags are in, and those bags are in, and those bags are in, and... you get it
    let getFor = (needle) => {
        let count = 0;
        if (rules[needle] && rules[needle].length > 0) {
            rules[needle].forEach(([nextNeedle, i]) => {
                count = count + i + ( getFor(nextNeedle) * i );
            });
        }
        return count;
    };
    return getFor("shiny gold");
}
console.log(solve(input));