function solution(arr) {
    const col = arr.length;
    const row = arr[0].length;
    
    if (row === col) {
        return arr;
    }
    
    if (row < col) {
        const zeroRow = new Array(col - row).fill(0);
        
        arr.map(item => item.push(...zeroRow));
        
        return arr;
    }
    
    const zeroRow = new Array(row).fill(0);
    
    for (let i = 0; i < row - col; i++){
        arr.push(zeroRow);
    }  
        
    return arr;
}