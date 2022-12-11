/**
 * choice 1~3 left, 4 무효, 5~7 right
 *
 */
function solution(survey, choices) {
    var answer = '';
    const mbtiPoint = {
        R: 0, T: 0, C: 0, F: 0,
        J: 0, M: 0, A: 0, N: 0,
    };
    const mbtiList = [
        ["R","T"], ["C","F"], 
        ["J","M"], ["A","N"]
    ];

    for (let i = 0; i < survey.length; i++) {
        const point = Math.abs(choices[i] - 4);

        if (choices[i] < 4) {
            mbtiPoint[survey[i][0]] += point;
        }

        if (choices[i] > 4) {
           mbtiPoint[survey[i][1]] += point;
        }
    }

    mbtiList.forEach(mbti => {
        if (mbtiPoint[mbti[0]] > mbtiPoint[mbti[1]]) {
            answer += mbti[0];
            return;
        }

        if (mbtiPoint[mbti[0]] < mbtiPoint[mbti[1]]) {
            answer += mbti[1];
            return;
        }

        answer += mbti.sort((a, b) => a - b)[0];
    })

    return answer;
}