function solution(participant, completion) {
    var answer = '';
    const sortParticipant = participant.sort();
    const sortCompletion = completion.sort();
    
    for (let i = 0; i < sortParticipant.length; i++) {
        if (sortParticipant[i] !== sortCompletion[i]) {
            answer = sortParticipant[i];
            break;
        }
    }
    
    return answer;
}