function solution(dartResult) {
    const bonus = {"S": 1, "D": 2, "T": 3}; // n제곱
    const regex = /\d+[SDT]{1}[\*\#]*/g
    const matchs = [...dartResult.match(regex)];
    const results = [];
    
    for (let i = 0; i < matchs.length; i++) {
        let result = 1;
        const number = [...matchs[i].match(/\d+/g)][0];
        const bonusType = [...matchs[i].match(/[SDT]{1}/g)][0];
        const option = matchs[i].match(/[\*\#]/g);
        
        result *= number;
        result = Math.pow(result, bonus[bonusType]);
        
        if (option && option[0] === "*") {
            result *= 2;
                
            if (i !== 0) {
                results[i - 1] *= 2;
            } 
        }
        
        if (option && option[0] === "#") {
            result *= -1;
        }
        
        results.push(result);
    }
    
    return results.reduce((acc, cur) => acc + cur);
}