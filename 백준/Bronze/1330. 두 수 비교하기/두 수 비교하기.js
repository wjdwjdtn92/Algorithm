const fs = require('fs');
const [first, second] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if (first < second) {
    console.log("<");
} else if (first > second) {
    console.log(">");
} else {
    console.log("==");
}