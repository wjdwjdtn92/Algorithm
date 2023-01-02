function solution(s) {
    var answer = [];
    const regex = /(?<={)(\d+,*)+(?=})/g
    const matchList = s.match(regex).join(",").split(",");
    const memo = {};
    
    for (const value of matchList) {
        if (!memo[value]) {
            memo[value] = 0;
        }
        
        memo[value] += 1;
    }
    
    
    answer = Object.keys(memo).map(Number).sort((a, b) => memo[b] - memo[a]);
    
    return answer;
}