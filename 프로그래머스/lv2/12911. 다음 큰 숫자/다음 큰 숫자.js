// 그냥 구하기? 효율적인 방법이 있나?

function getOneCount(n) {
    return  n.toString(2).replace(/0/g, "").length;
}

function solution(n) {
    const oneCount = getOneCount(n);
    let nextN = n;
    
    
    while (true) {
        nextN += 1;
        
        if (getOneCount(nextN) === oneCount) break;
    }
    
    return nextN;
}