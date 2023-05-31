function solution(cards1, cards2, goal) {
    let turn = 0;
    let i = 0;
    let j = 0;
    let z = 0;
    let isMath = true;
    
    while (goal.length > z) {
        if (turn === 0 && goal[z] === cards1[i]) {
            i++
            z++;
            isMath = true;
            continue;
        }
        
        if (turn === 0 && goal[z] !== cards1[i]) {
            if (!isMath) {
                return "No";
            }
            
            turn = 1;
            isMath = false;
            continue;
        }
        
        if (turn === 1 && goal[z] === cards2[j]) {
            j++
            z++;
            isMath = true;
            continue;
        }
        
        if (turn === 1 && goal[z] !== cards2[j]) {
            if (!isMath) {
                return "No";
            }
            
            turn = 0;
            isMath = false;
            continue;
        }
    }
    
    return "Yes";
}