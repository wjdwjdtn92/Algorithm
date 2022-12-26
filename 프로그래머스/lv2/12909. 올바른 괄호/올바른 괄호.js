function solution(s){
    let count = 0;
    
    if (s[0] === ")") {
        return false;
    }
    
    for (const char of s) {
        if (char === "(") {
            count += 1;
        }
        
        if (char === ")") {
            count -= 1;
        }
        
        if (count < 0) {
            return false;
        }
    }
    
    return count === 0;
}