function solution(strArr) {
    const result = strArr.reduce((acc, string) => {
        const strLength = string.length;
        
        if(!acc[strLength]) {
            acc[strLength] = 0;
        }
        
        acc[strLength] += 1;
        
        return acc;
    }, {})
    
    const max = Math.max(...Object.values(result));
    
    return max;
}