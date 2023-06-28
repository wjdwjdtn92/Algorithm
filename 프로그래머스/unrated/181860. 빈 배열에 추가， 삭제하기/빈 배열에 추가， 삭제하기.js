function solution(arr, flag) {
    return arr.reduce((acc, number, index) =>  {
        if (flag[index]) {
            acc.push(...Array(number * 2).fill(number));    
        } else {
            acc.splice(acc.length - number,  number);
        }
        return acc;
    }, []);
}