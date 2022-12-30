function solution(progresses, speeds) {
    let answer = [];
    
    const works = progresses.map((el, index) => {
        const work = 100 - el;
        return Math.ceil(work / speeds[index]);
    })
    
    let i = 0;
    let j = i + 1;
    
    while(works.length > j) {
        if(works[i] >= works[j]){
            j += 1;
            continue;
        }
        
        answer.push(j - i);
        i = j;
        j = i + 1;
    }
    
    answer.push(j - i);
    
    return answer;
}