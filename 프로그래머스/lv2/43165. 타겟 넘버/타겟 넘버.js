// 깊이 우선탐색
// +, - 한걸 넘기기

function solution(numbers, target) {
    var answer = 0;
    
    const bfs = (numbers, target, sum) => {
        let count = 0;
        
        if (numbers.length === 0) {
            if (sum === target) {
                return 1;    
            }
            return 0;
        }
        
        const number = numbers.shift();
        
        count +=  bfs([...numbers], target, sum + number);
        count +=  bfs([...numbers], target, sum - number);
        
        return count
    }
    
    return bfs(numbers, target, 0);
}