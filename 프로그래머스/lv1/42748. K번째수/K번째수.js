function solution(array, commands) {
    const answer = [];
    
    commands.forEach((command) => {
        const sliceSortArray = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
        
        answer.push(sliceSortArray[command[2] - 1]);
    })
    
    return answer;
}