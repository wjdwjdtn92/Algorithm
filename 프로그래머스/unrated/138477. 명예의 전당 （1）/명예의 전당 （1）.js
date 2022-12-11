function solution(k, score) {
    const answer = [];
    const memo = [];

    for (let i = 0; i < score.length; i++) {
        memo.push(score[i])
        memo.sort((a, b) => b - a);

        if (i < k) {
            answer.push(memo[memo.length - 1]);            
        } else {
            answer.push(memo[k - 1]);
            memo.splice(-1);
        }
    }

    return answer;
}