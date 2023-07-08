// 칠해졌으면 다시 볼필요 없음
// 2, 3, 4, 5 => 4개 => 2 + 4 - 1;

function solution(n, m, section) {
    let start = section[0];
    let end = start + m - 1;
    let count = 1;
    
    section.forEach((value) => {
        if (start <= value && end >= value) {
            return;
        } 
        
        start = value;
        end =  start + m - 1;
        count += 1;
    })
    
    return count;
}