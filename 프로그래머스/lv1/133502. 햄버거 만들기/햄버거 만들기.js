function solution(ingredient) {
    const stack = [];
    let answer = 0;
    const hamburger = "1231";

    let startIndex = ingredient.indexOf(1);

    for (let i = startIndex; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        if (stack.length < 4) {
            continue;
        }

        const compareString = stack.slice(-4).join('')

        if (hamburger !== compareString) {
            continue;
        }

        stack.splice(-4);
        answer += 1;
    }

    return answer;
}