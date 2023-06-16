function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const sliceArr = arr.slice(s, e + 1);
        
        sliceArr.sort((a, b) => a - b);
        
        const findIdex = sliceArr.findIndex((value) => value > k);
        
        return findIdex === -1 ? -1 : sliceArr[findIdex];
    });
}