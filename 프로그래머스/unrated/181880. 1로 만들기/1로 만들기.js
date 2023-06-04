function solution(num_list) {
    const answer = num_list.reduce((acc, cur, index) => {
        let num = 0;

        while (cur / 2 >= 1) {
            num += 1;
            cur = parseInt(cur / 2, 10);
        }
        
        return acc + num;
    }, 0)
    
    return answer;
}