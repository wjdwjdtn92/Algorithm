function solution(my_string) {
    return my_string.split(" ").filter((value) => value.length > 0);
}