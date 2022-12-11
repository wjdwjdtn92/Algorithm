function solution(d, budget) {
    let sum = 0;
    let index = 0;
    
    const dSort = d.sort((a, b) => a - b);
    sum = dSort[0];
    
    while(sum <= budget) {
        index += 1;
        
        if (dSort.length <= index) {
            break;
        }
        
        sum += dSort[index];
    }
    
    return index;
}