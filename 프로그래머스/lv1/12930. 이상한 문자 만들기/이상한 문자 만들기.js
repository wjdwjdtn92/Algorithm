function solution(s) {
    var answer = '';
    const sTolower = s.toLowerCase();
    
    const convertSArr = sTolower.split(' ').map(word => {
        const newWord = [];
        
        for (let i = 0; i < word.length; i++) {
            if (i % 2 !== 1) {
                newWord.push(word[i].toUpperCase());
                continue;
            }
            
             newWord.push(word[i]);
        }
        
        return newWord.join('');
    });
    
    return convertSArr.join(' ');
}