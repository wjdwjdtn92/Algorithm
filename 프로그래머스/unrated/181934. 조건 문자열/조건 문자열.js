function solution(ineq, eq, n, m) {
    if (eq === "=" && n === m) {
        return 1;
    }
    
    if (ineq === ">") {
        return n > m ? 1 : 0
    }
    
    if (ineq === "<") {
        return n < m ? 1 : 0
    }
    
}