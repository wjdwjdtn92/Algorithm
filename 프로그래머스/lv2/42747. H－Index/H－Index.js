function solution(citations) {
    const sortedCitations = [...citations].sort((a, b) => b - a);
    const citationsLength = sortedCitations.length;
    console.log(sortedCitations)
    
    let i = 0;
    
    while (i < citationsLength) {
        if (i >= sortedCitations[i]) {
            return i;
        }
        
        i += 1;
    }
    
    return citationsLength;
}