function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    } 
    
    const minValue = Math.min(...arr);
    const index = arr.indexOf(minValue);
    arr.splice(index, 1);
    
    return arr;
}