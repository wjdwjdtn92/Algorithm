function solution(arr) {
    const col = arr.length;
    const row = arr[0].length;
    
    if (row === col) {
        return arr;
    }
    
    if (row < col) {
        const appendZeros = [];
        
        for (let i = 0; i < col - row; i++){
            appendZeros.push(0);
        }       
        
        arr.map(item => item.push(...appendZeros));
        
        return arr;
    }
    
    const appendZeros = [];
    
    for (let i = 0; i < row; i++){
        appendZeros.push(0);
    } 
    
    for (let i = 0; i < row - col; i++){
        arr.push(appendZeros);
    }  
        
    return arr;
}