function solution(n) {
    const numberList = Array.from(String(n), Number);
    const numberListSort = numberList.sort((a, b) => b - a);
    
    return Number(numberListSort.join(""));
}