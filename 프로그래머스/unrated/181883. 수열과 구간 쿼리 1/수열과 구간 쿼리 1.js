function solution(arr, queries) {
    return arr.map((num, index) => {
        return num + queries.filter(([a, b]) => a <= index && b >= index).length;
    });
}