function solution(arr) {
    return arr.reduce((acc, number) => {
        acc.push(...Array(number).fill(number));
        
        return acc;
    }, []);
}