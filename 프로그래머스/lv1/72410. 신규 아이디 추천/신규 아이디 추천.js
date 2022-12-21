/**
 * 아이디의 길이는 3자 이상 15자 이하
 * 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용가능
 * 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용불가
 * 1. 대문자 -> 소문자 치환
 * 2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 제외한 모든문자 삭제
 * 3. .. -> . 치환
 * 4. 처음과 끝 . 삭제
 * 5. 빈문자열? ->  a 대입
 * 6. 15자까지 자르기
 * 7. 2자 이하 -> 3자까지 마지막 문자 반복
 */

function solution(new_id) {
    const regexReplaceArr = [
        [/[^a-z\d-_\.]/g, ""],
        [/\.{2,}/g, "\."],
        [/(^\.|\.$)/g, ""],
    ]
    
    let changeId = new_id.toLowerCase();
    
    for ( const [regex, replaceString] of regexReplaceArr ) {
        changeId = changeId.replace(regex, replaceString);
    }
    
    if (changeId.length > 15) {
        const chageIdSlice = changeId.slice(0, 15);
        
        return chageIdSlice.replace(regexReplaceArr[2][0], regexReplaceArr[2][1]);
    }
    
    if (changeId.length === 0) {
        return "aaa";
    }
    
    if (changeId.length < 3) {
        const changeIdLength = changeId.length;
        
        return changeId + changeId[changeIdLength - 1].repeat(3 - changeIdLength);
    }
    
    return changeId
}