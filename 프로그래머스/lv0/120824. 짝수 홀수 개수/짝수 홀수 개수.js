function isOdd(num) {
    return num % 2 !== 0;
}

function solution(num_list) {
    const oddList = num_list.filter(isOdd);
    const oddAmount = oddList.length; 
    const evenAmount = num_list.length - oddAmount;
    
    return [evenAmount, oddAmount];
}