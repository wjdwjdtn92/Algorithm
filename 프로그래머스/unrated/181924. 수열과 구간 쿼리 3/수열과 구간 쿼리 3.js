function swap(arr, i, j) {
     [arr[i],  arr[j]] = [arr[j],  arr[i]];
}

function solution(arr, queries) {
    queries.forEach(([i, j]) => {
        swap(arr, i, j);
    })
    
    return arr;
}