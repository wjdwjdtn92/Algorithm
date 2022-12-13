function solution(nums) {
    const pickNum = nums.length / 2;
    const uniqueNumsLength = [...new Set(nums)].length;
    
    return uniqueNumsLength >= pickNum ? pickNum : uniqueNumsLength;
}