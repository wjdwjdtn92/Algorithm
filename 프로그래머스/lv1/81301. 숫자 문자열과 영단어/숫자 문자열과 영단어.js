function solution(s) {
    const engNumList = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    
    engNumList.forEach((engNum, index) => {
        s = s.split(engNum).join(index);
    })
    
    return Number(s);
}