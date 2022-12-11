function solution(n) {
    var answer = 0;
    const sqrtNum = Math.sqrt(n);
    
    if(sqrtNum === parseInt(sqrtNum, 10)) {
        return Math.pow(sqrtNum + 1, 2);
    }
    
    return -1;
}