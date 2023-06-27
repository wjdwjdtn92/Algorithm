function solution(arr, intervals) {
    const result = intervals.reduce((acc, [a, b]) => {
        acc.push(...arr.slice(a, b + 1));
        
        return acc;
    }, [])
    
    return result;
}