function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    const aToNumber = Number(a);
    const bToNumber = Number(b);
    
    if (op === "+") {
        return aToNumber + bToNumber;
    }
    
    if (op === "-") {
        return aToNumber - bToNumber;
    }
    
    if (op === "*") {
        return aToNumber * bToNumber;
    }
}