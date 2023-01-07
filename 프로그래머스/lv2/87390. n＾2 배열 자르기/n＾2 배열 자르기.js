function solution(n, left, right) {
    const memo = [];

    for (let i = left; i <= right; i++) {
        const row = parseInt(i / n, 10) + 1
        const col = (i % n)

        if (row <= col) {
            memo.push(col + 1);
            continue;
        }

        memo.push(row);
    }

    return memo;
}