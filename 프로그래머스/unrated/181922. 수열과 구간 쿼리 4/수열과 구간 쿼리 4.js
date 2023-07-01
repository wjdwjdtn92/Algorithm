// n2 -> 1000 * 1000000 => 1,000,000,000 ?

function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        //k의 배수이면시 시작점
        const startIndex = Math.ceil(s / k) * k;
        
        for(let i = startIndex; i <= e; i += k) {
            arr[i] += 1;
        }
    })
    return arr;
}