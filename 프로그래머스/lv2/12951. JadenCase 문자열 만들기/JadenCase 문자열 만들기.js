function solution(s) {
    var answer = '';
    
    const convertString = (word) => {
        if (word.length === 0) {
            return word;
        } 
        
        return word[0].toUpperCase() + word.slice(1);
    }
    
    return s.toLowerCase()
        .split(" ")
        .map(convertString)
        .join(" ");;
}