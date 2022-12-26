//brown + yellow = col * row => col이 더 큰수
function solution(brown, yellow) {
    var answer = [];
    const total = brown + yellow;
    let col = Math.ceil(Math.sqrt(total));
    let row = -1;
    16 + 2 * 4
    
    while (col <= total) {
        row = total / col;
        
        if (Number.isInteger(row)) {
            if ((col * 2) + ((row - 2) * 2) === brown) {
                break;
            }
        };
        col += 1;
    }
    
    return [col, row];
}