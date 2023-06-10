const fs = require('fs');
const [length, ...strings] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const users = strings.map((string) => string.split(" "));

users.sort((a, b) => a[0] - b[0]);

console.log(users.map((user) => user.join(" ")).join("\n"));
