function solution(X, Y) {
    let answer = '';
    const xArr = [...X];
    const yArr = [...Y]
    
    const numList = Array.from({length: 10}, (_, i) => String(i));
    
    for (let i = 9; i >= 0; i--) {
        const xCount = xArr.filter(el => el === numList[i]).length;
        const yCount = yArr.filter(el => el === numList[i]).length;
        
        const minCount = Math.min(yCount, xCount);
        
        if (minCount === 0) {
            continue;
        }
        
        if (i === 0 && answer === "") {
            answer = '0';
            continue;
        }
        
        answer += numList[i].repeat(minCount);
    }
    
    if (answer.length === 0) {
        return "-1";
    }
    
    return answer;
}