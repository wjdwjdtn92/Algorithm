function solution(x, n) {
    var answer = Array.from({length: n}, (_, i) => (i + 1) * x);
    return answer;
}