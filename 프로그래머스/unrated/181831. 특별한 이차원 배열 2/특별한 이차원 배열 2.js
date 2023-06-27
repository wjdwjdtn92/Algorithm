function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (i === j) {
                continue;
            }
            
            if (arr[i][j] === -1) {
                continue;
            }
            
            if (arr[i][j] !== arr[j][i]) {
                return 0;
            }
            
            arr[i][j] = -1;
            arr[j][i] = -1;
        }
    }
    
    return 1;
}