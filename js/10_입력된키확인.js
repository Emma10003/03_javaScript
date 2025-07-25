// 화면에 존재하는 key 모두 가져오기
const key = document.querySelectorAll(".key");

// 특정 요소 X
// 문서(화면 전체)에서 키가 눌러지는 걸 감지했을 때
document.addEventListener("keydown", function(e) {
    // e: 이벤트 객체(이벤트 관련 정보가 모두 담겨 있음)
    // e.key: 입력된 키(를 바라봄)

    // 문자열.toLowerCase(): 영어를 모두 소문자로 변경
    // 문자열.toUpperCase(): 영어를 모두 대문자로 변경
    // index = 0 번째 부터 시작, 마지막은 -1 한 숫자값
    // length = 총 글자 수와 같이 길이 수

    let idx;   // 인덱스 값을 저장할 변수 이름

    // 입력된 키와 일치하는 case를 실행

    switch(e.key.toLowerCase()) {   // 이벤트 발생
        case 'q' :   // 'q'가 눌리면
            idx = 0;   // idx에 0을 저장
            break;
        case 'w' :
            idx = 1;
            break;
        case 'e' :
            idx = 2;
            break;
        case 'r' :
            idx = 3;
            break;
        default:   // 각각의 case에서 break 안 하면 case문 실행 후 default로 넘어옴.
            alert("준비중입니다.");
            return;
    }
    key[idx].style.color = "#2a9d8f";
});

// keyup 글자색 white
document.addEventListener("keyup", function(e) {
    let idx;

    switch(e.key.toLowerCase()) {
        case 'q' :   // 'q'가 눌리면
            idx = 0;   // idx에 0을 저장
            break;
        case 'w' :
            idx = 1;
            break;
        case 'e' :
            idx = 2;
            break;
        case 'r' :
            idx = 3;
            break;
        default:   // 각각의 case에서 break 안 하면 case문 실행 후 default로 넘어옴.
            alert("준비중입니다.");
            return;
    }
    key[idx].style.color = "#333";   // 키에서 손을 떼면 원래 색상(#333)으로 바뀜
});