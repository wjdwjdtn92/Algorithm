
//a, b, c, d는 1 이상 6 이하의 정수입니다
function solution(a, b, c, d) {
    const inputs = [a, b, c, d];
    const counts = Array.from({length: 7}, (_, index) => [index, 0]);
   
    inputs.forEach((number) => {
        counts[number][1] += 1;
    })
    
    const filter = counts.filter(([index, count]) => count !== 0);
    
    if (filter.length === 4) {
        return Math.min(...inputs);
    }
    
    if (filter.length === 1) {
        return filter[0][0] * 1111;
    }
    
    if (filter.length === 2) {
        if (filter[0][1] === 3) {
            return Math.pow(10 * filter[0][0] + filter[1][0], 2);
        }
        
        if (filter[0][1] === 1) {
            return Math.pow(10 * filter[1][0] + filter[0][0], 2);
        }
        
        return (filter[0][0] + filter[1][0]) * Math.abs(filter[0][0] - filter[1][0]);
    }
    
    const oneCountList = filter.filter(([index, count]) => count !== 2);
    
    return oneCountList[0][0] * oneCountList[1][0];
}