function solution(numLog) {
    const map = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a"
    }
    let result = "";
    
    
    for (let i = 0; i < numLog.length - 1; i++) {
        result += map[numLog[i + 1] - numLog[i]];
    }
    
    return result;
}