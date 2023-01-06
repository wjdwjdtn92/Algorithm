function solution(today, terms, privacies) {
    const answer = [];
    const todyToDate = new Date(today);
    const termsObject = {}
    
    for(const term of terms) {
        const [key, month] = term.split(" ");
        
        termsObject[key] = month;
    }
    
    for(let i = 0; i < privacies.length; i++) {
        const [dateString, key] = privacies[i].split(" ");
        const addMonth = Number(termsObject[key]);
        const date = new Date(dateString);
        const checkDate = date.setMonth(date.getMonth() + addMonth);
        
        if (todyToDate >= date) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}