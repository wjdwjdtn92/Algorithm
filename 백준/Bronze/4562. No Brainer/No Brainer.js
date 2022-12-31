const fs = require('fs');
const [n, ...inputs] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];

for (let i = 0; i < n; i++) {
    const [first, second] = inputs[i].split(" ");
    if (Number(first) < Number(second)) {
        result.push("NO BRAINS");
    } else {
        result.push("MMM BRAINS");
    }
}

console.log(result.join("\n"));