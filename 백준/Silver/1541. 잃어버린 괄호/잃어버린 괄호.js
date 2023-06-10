const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim();

const splitMinus = inputs.split("-");

const result = splitMinus.reduce((acc, cur, index) => {
    const currentSum = cur.split("+").map(Number).reduce((acc, cur) => acc + cur);

    if (index === 0) {
        return currentSum;
    }
    
    return acc - currentSum;
}, 0)

console.log(result);
