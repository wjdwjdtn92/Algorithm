const fs = require('fs');
const [length, ...strings] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const points = strings.map((string) => string.split(" ").map(Number));

const ponintsSorted = points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

console.log(ponintsSorted.map((point) => point.join(" ")).join("\n"));