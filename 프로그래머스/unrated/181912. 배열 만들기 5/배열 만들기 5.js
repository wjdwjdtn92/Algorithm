function solution(intStrs, k, s, l) {
    const answer = intStrs.reduce((acc, str) => {
        const sliceNumber = Number(str.slice(s, s + l));
        
        if (sliceNumber > k) {
            acc.push(sliceNumber);
        }
        
        return acc;
    }, []);
        
        
    return answer;
}