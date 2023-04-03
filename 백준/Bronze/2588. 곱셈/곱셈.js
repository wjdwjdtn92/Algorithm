const fs = require('fs');
const [firstRow, secondRow] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const firstRowToNumber = Number(firstRow);
const secondRowToNumber = Number(secondRow);

const secondRowNumbers = [...secondRow].reverse().map(Number);

const results = secondRowNumbers.map((secondRowNumber) => {
    return secondRowNumber * firstRowToNumber;
});

results.forEach((result) => {
    console.log(result);
})
console.log(firstRowToNumber * secondRowToNumber);