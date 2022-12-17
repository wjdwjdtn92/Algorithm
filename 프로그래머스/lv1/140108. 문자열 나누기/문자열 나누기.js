function solution(s) {
  var answer = 0;
  let count = 1;
  let left = 0;
  let right = left + 1;

  const sLength = s.length;

  while (left < sLength) {
    if (s[left] === s[right]) {
      count += 1;
      right += 1;
      continue;
    }

    if (count === 1) {
      answer += 1;
      left = right + 1;
      right = left + 1;
      continue;
    }

    count -= 1;
    right += 1;
  }

  return answer === 0 ? 1 : answer;
}

const startTime = performance.now();
solution(
  "abcasdasdawdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelkerwdaqweqweasdasfdetgarelker"
);

const endTime = performance.now();
console.log(endTime - startTime);
