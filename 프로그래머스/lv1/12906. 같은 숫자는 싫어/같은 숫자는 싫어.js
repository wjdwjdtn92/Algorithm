function solution(arr)
{
    var answer = [];

    arr.forEach(el => {
        if (answer[answer.length - 1] !== el) {
            answer.push(el);
        }
    })
    
    return answer;
}