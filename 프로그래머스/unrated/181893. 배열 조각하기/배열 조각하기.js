function solution(arr, queries) {
    queries.forEach((query, idx) => {
        if (idx % 2 === 0) {
            arr = arr.slice(0, query + 1);
        } else {
            arr = arr.slice(query);
        }
    })
    
    return arr;
}