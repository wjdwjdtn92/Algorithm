const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    const resultString = n % 2 === 0 ? "even" : "odd";
    
    console.log(`${n} is ${resultString}`)
});