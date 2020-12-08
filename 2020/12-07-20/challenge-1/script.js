let input = require("fs").readFileSync("input.txt", { encoding: "utf-8", flag: 'r'}).trim();
input = input.split(/\n/);
function solve(input) {
    let rules = {};
    input.forEach((line) => {
        let parentRegex = /(\w+ \w+) bags contain/;
        let childRegex = /\d+ (\w+ \w+) bags?/g;
        let regex = parentRegex.exec(line);
        console.log(regex);
        let parent = regex[1];
        rules[parent] = [];
        let children = line.substr(regex[0].length);
        while (regex = childRegex.exec(children)) {
            rules[parent].push(regex[1]);
        }
    });
    let bags = new Set();
    let needle = ["shiny gold"];
    let needles;
    do {needles = [];
        for (let i of needle) {
            for (let j of Object.keys(rules)) {
                if (j !== i && rules[j].includes(i)) {
                    needles.push(j);
                    bags.add(j);
                }
            }
        }
        needle = needles;
    } while (needles.length > 0);
    return bags.size;
}
console.log(solve(input));