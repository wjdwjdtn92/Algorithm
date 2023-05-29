function covertToUpperCase(str) {
    return str.toUpperCase();
}

function solution(myString) {
    return [...myString].map(covertToUpperCase).join("");
}