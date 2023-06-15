function solution(myString, pat) {
    const isInclude = myString.toLowerCase().includes(pat.toLowerCase());
    
    return isInclude ? 1 : 0;
}