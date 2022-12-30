/**
 * k칸 점프 (건전지 사용), 현재까지 온거리 * 2 순간이동
 */

function solution(n){
    let ans = 1;
    
    while(n > 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            ans += 1;
            n -= 1;
        }
    }
    
    return ans;
}