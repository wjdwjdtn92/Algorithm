function solution(s) {
    var answer = [0, 0];
    
    while(s !== "1") {
        const sLength = s.length;
        const newSLength = s.replace(/0/g, "").length;
        
        answer[0] += 1;
        answer[1] += sLength - newSLength;
        s = s.replace(/0/g, "").length.toString(2);
    }
    
    return answer;
}