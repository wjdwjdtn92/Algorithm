function solution(n, arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        answer.push(arr1[i] | arr2[i]);
    }
    
    answer = answer.map(el => {
        const binary = el.toString(2);
        const zeroCount = Math.max(0, n - binary.length);
        const zeroAppend = "0".repeat(zeroCount);        
        
        return (zeroAppend + binary).replaceAll("1", "#").replaceAll("0", " ");
    })

    return answer;
}