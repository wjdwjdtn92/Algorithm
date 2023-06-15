function solution(myString) {
    const splitString = myString.split("x");
    return splitString.map((string) => string.length);
}