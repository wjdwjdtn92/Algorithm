function solution(s, n) {
    const answer = [...s].map((el) => {  
        if (el === " ") {
            return el;
        }
        
        let charCode = el.charCodeAt(0);
        let nextCharCode = charCode + n;
        
        if (nextCharCode > 122 && charCode >= 97) { 
            nextCharCode = nextCharCode - 26;
        }
        
        if (nextCharCode > 90 && charCode < 97) { 
            nextCharCode = nextCharCode - 26;
        } 
        
        return String.fromCharCode(nextCharCode);
    }).join('');
    
    return answer;
}