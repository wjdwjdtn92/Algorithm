/*
 * 1 2 3 4 / 3 * 4 / 
 * 그냥 4방향 while?
 * [0, 1], [1, 0], [0, -1], [-1, 0]
 */

function solution(n) {
    const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const result = Array.from({length: n} , () => Array(n).fill(0));
    
    let currentN = 1;
    let point = [0, 0];
    let dist = 0;
    
    
    while(currentN <= n * n) {
        result[point[0]][point[1]] = currentN;
        
        let nextX = point[0] + move[dist][0];
        let nextY = point[1] + move[dist][1];
        
        if (result[nextX] === undefined || result[nextX][nextY] !== 0) {
            if (dist === 3) {
                dist = 0;
            } else {
                dist += 1;
            }
            nextX = point[0] + move[dist][0];
            nextY = point[1] + move[dist][1];
        }
        
        [point[0], point[1]] = [nextX, nextY];
        
        currentN += 1;
    }
    
    return result;
}