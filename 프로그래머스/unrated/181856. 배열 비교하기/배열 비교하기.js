function sum(a, b) {
    return a + b;
}

function solution(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return 1;
    }
    
    if (arr1.length < arr2.length) {
        return -1;
    }
    
    const arr1Sum = arr1.reduce(sum);
    const arr2Sum = arr2.reduce(sum);
    
    if (arr1Sum > arr2Sum) {
        return 1;
    }
    
    if (arr1Sum < arr2Sum) {
        return -1;
    }
    
    return 0;
}