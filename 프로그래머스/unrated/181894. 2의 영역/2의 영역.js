function solution(arr) {
    const fristIndex = arr.indexOf(2);
    
    if (fristIndex === -1) {
        return [-1];
    }
    
    const lastIndex = arr.lastIndexOf(2);
    
    return arr.slice(fristIndex, lastIndex + 1);
}