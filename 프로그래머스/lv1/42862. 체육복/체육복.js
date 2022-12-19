function solution(n, lost, reserve) {
    let count = 0;
    const checkRange = [1, -1];
    const lostLength = lost.length;
    
    if (lostLength === 0) {
        return n;
    }
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    const lostFilter = lost.filter((num) => !(reserve.includes(num)));
    const reserveFilter = reserve.filter((num) => !(lost.includes(num)));
    
    for (let i = lostFilter.length -1; i >= 0; i--) {
        let findIndex = -1;
        
        for (let addNum of checkRange) {
            findIndex = reserveFilter.indexOf(lostFilter[i] + addNum);
            
            if (findIndex !== -1) break;
        }
        
        if (findIndex !== -1) {
            reserveFilter[findIndex] = undefined;
            count += 1;
        };
    }
    
    return n - lostFilter.length + count;
}