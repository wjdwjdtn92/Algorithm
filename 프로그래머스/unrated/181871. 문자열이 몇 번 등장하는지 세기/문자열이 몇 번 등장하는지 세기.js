function solution(myString, pat) {
    let count = 1;
    let findIndex = myString.indexOf(pat);
    
    if (findIndex === -1) {
        return 0;    
    }
    
    while (true) {
        findIndex = myString.indexOf(pat, findIndex + 1);
        
        if (findIndex === -1) {
            break;
        }
        
        count += 1;
    }
    
    
    return count;
}