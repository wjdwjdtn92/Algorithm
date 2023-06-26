function isAdd (isLengthOdd, number, index) {
    if (isLengthOdd && index % 2 !== 0) {
        return true;
    }
    
    if (!isLengthOdd && index % 2 === 0) {
        return true;
    }
    
    return false;
}

function solution(arr, n) {
    const isLengthOdd = arr.length % 2 === 0;
    
    return arr.map((number, index) => {
        if (isAdd(isLengthOdd, number, index)) {
            return number + n;
        }
        return number;
    });
}