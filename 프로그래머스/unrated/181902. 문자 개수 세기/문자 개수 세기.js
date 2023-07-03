function solution(my_string) {
    const answer = Array(52).fill(0);
    const aCharCode = "A".charCodeAt();
    const aCharCodeLower = "a".charCodeAt();
    
    [...my_string].forEach((string) => {
        const currentCharCode = string.charCodeAt();
        
        if (aCharCodeLower <= currentCharCode) {
            answer[currentCharCode - aCharCodeLower + 26] += 1;
        } else {
            answer[currentCharCode - aCharCode] += 1;    
        }
        
    })
    
    return answer;
}