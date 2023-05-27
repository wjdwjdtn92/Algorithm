function solution(q, r, code) {
    var answer = [...code].reduce((acc, cur, index) => {
        if (index % q === r) {
            acc.push(cur)
        }
        return acc;
    }, []).join("");
    
    return answer;
}