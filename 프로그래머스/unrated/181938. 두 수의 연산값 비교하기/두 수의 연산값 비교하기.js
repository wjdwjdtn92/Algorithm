function solution(a, b) {
    const ab = Number(`${a}${b}`);
    const doubleAb = 2 * a * b;
          
    return ab >= doubleAb ? ab : doubleAb;
}