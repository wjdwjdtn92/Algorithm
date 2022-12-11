function solution(phone_number) {
    const marsk = "*".repeat(phone_number.length - 4);
    
    return marsk + phone_number.slice(-4);
}