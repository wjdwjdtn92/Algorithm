/**
 * 2글자 이상
 * 첫글자 확인
 * 중복 확인
 */

function solution(n, words) {
    const answer = [];
    const history = [words[0]];
    let lastword = words[0];
    
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const lastChar = lastword[lastword.length - 1];
        
        if ( word.length < 2 
            || lastChar !== word[0] 
            || history.includes(word)
           ) {
            let turn = (i + 1) % n ;
            let count = parseInt((i + 1) / n, 10) + 1;
                  
            if (turn === 0) {
                turn = n;
                count -= 1;
            }
            
            return [turn, count];
        }
        
        lastword = word;
        history.push(word);
    }

    return [0, 0];
}