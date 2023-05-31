function solution(strArr) {
    const answer = strArr.map((str, index) => {
        if (index % 2 !== 0) {
            return str.toUpperCase();
        }
        return str.toLowerCase();
    });
    
    return answer;
}