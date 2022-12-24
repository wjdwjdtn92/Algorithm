function solution(board, moves) {
    var answer = 0;
    const stack = [];
    const boardSize = board.length;
    const topRows = Array(boardSize).fill(0);

    for (let i = 0; i < moves.length; i++) {
        const col = moves[i] - 1;
        let top = 0;

        while (boardSize > topRows[col]) {
            if (board[topRows[col]][col] !== 0) {
                top = board[topRows[col]][col];
                topRows[col] += 1;
                break;
            }
            topRows[col] += 1;
        }
        
        if (top === 0) {
            continue;
        }

        if (stack[stack.length - 1] === top) {
            stack.pop();
            answer += 2;
        } else {
            stack.push(top);
        }
    }

  return answer;
}