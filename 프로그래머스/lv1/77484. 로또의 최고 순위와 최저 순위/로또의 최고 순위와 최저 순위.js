function solution(lottos, win_nums) {
    let maxRank = 7;
    let minRank = 7;
    
    const memo = {};
    
    for (const number of win_nums) {
        memo[number] = true;
    }
    
     for (const number of lottos) {
         if (memo[number]) {
             maxRank -= 1;
             minRank -= 1;
         }
         
         if (number === 0) {
             maxRank -= 1;
         }
    }
    
    const ranks = [maxRank, minRank].map(rank => {
        if (rank === 7) {
            return 6;
        }
        return rank;
    }); 
    
    return ranks;
}