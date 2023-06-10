const fs = require('fs');
const [length, strings] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = strings.split(" ").map(Number);
const uniqueNumbers = [...new Set(numbers)];

const uniqueNumbersSorted = uniqueNumbers.sort((a, b) => a - b);

const memo = uniqueNumbersSorted.reduce((acc, cur, index) => {
    acc[cur] = index;
    
    return acc;
} , {})

const result = numbers.map((number) => memo[number]);

console.log(result.join(" "));


