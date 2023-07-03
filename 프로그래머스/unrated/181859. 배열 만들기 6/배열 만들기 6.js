function solution(arr) {
    const answer = arr.reduce((acc, number) => {
        if (acc.length === 0) {
            acc.push(number);
        } else if (acc[acc.length - 1] === number) {
            acc.pop();
        } else {
            acc.push(number);
        }
        
        return acc;
    }, []);
    
    return answer.length === 0 ? [-1] : answer;
}