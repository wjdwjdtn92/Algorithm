function solution(array, height) {
    const biggerList = array.filter(item => item > height);
    
    return biggerList.length;
}