function solution(str1, str2) {
    const isIncludes = str2.includes(str1);
    
    return isIncludes ? 1 : 0;
}