function solution(answers) {
    var answer = [];
    let person = [
        "12345",
        "21232425",
        "3311224455",
    ]
    
    person = person.map((el) => {
        const repeatNum = Math.ceil(answers.length / el.length);
            
        return el.repeat(repeatNum)
    })
    
    
    const result = answers.reduce((acc, cur, index) => {
        acc[0][1] = Number(person[0][index]) === cur ? acc[0][1] + 1 : acc[0][1]
        acc[1][1] = Number(person[1][index]) === cur ? acc[1][1] + 1 : acc[1][1]
        acc[2][1] = Number(person[2][index]) === cur ? acc[2][1] + 1 : acc[2][1]
        
        return acc;
    }, [[0, 0], [1, 0], [2, 0]])
    
    const maxNum = Math.max(result[0][1], result[1][1], result[2][1])
    
    const maxSuccessPerson = result.filter(el => el[1] === maxNum);
    
    answer = maxSuccessPerson.map(el => el[0] + 1);
    
    return answer;
}