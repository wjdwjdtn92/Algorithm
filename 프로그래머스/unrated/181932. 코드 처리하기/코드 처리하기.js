function solution(code) {
    let mode = false;
    const RESULT_EMPTY = "EMPTY"
    
    if (code.length === 0 ) {
        return RESULT_EMPTY;
    }
    
    const result = [];
    
    for (let idx = 0; idx < code.length; idx++) {
        const value = code[idx];
        
        if (value === "1") {
            mode = !mode;
            continue;
        }
        
        if (mode === false && idx % 2 === 0) {
            result.push(value);
        }
        
        if (mode && idx % 2 !== 0) {
            result.push(value);
        }
    }
    
    if (result.length === 0 ) {
        return RESULT_EMPTY;
    }
    
    return result.join("");
}