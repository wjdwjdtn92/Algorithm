function solution(board, k) {
    const col = board.length;
    const row = board[0].length;
    let result = 0;
    
    for (let i = 0; i < col; i++) {
        if (i > k) {
            continue;
        }
        
        const end = Math.min(k - i + 1, row);
        
        for (let j = 0; j < end; j++) {
            result += board[i][j];
        }
    }
    
    return result;
}