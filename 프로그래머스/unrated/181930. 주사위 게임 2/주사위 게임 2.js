function sum(a, b, c) {
    return a + b + c;
}

function powSum(a, b, c, powNum) {
    return Math.pow(a, powNum) + Math.pow(b, powNum) + Math.pow(c, powNum);
}


function solution(a, b, c) {
    if (a === b && b === c) {
        return sum(a, b, c) * powSum(a, b, c, 2) *  powSum(a, b, c, 3);
    }
    
    if (a !== b && b !== c && a !== c) {
        return sum(a, b, c);
    }
    
    return sum(a, b, c) * powSum(a, b, c, 2);
}