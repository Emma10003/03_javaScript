// 문제 1: 클릭할 때마다 색상 변경
/*
1. colorBox 요소 선택하기
const colorBox = document.querySelector("#colorBox");

2. 색상 배열과 인덱스 변수 만들기
const colors = ["red", "blue", "green", "yellow"];
let colorIndex = 0;

3. click 이벤트 리스너 추가
colorBox.addEventListener("click", function() {
    // 현재 인덱스의 색상으로 배경색 변경
    // 인덱스를 다음으로 이동 (마지막이면 0으로)
});
*/
const colorBox = document.querySelector("#colorBox");
const colors = ["red", "blue", "green", "yellow"];


colorBox.addEventListener("click", function(){
    let colorIndex = 0;
    // 현재 인덱스의 색상으로 배경색 변경
    this.style.backgroundColor = colors[colorIndex];

    // 인덱스를 다음으로 이동 (마지막이면 0으로)
    // +  -  *  %(나머지)  /(몫)
    colorIndex = (colorIndex + 1) % colors.length;
});


// 문제 2: 더블클릭으로 크기 변경
/*
1. 요소들 선택하기
const sizeBox = document.querySelector("#sizeBox");
const currentSize = document.querySelector("#currentSize");

2. 크기 배열과 인덱스 변수
const sizes = [100, 150, 200];
let sizeIndex = 0;

3. dblclick 이벤트 리스너 추가
sizeBox.addEventListener("dblclick", function() {
    // 인덱스 증가 (순환)
    // 새로운 크기로 width, height 변경
    // 텍스트 업데이트
});
*/
const sizeBox = document.querySelector("#sizeBox");
const currentSize = document.querySelector("#currentSize");
let val = 100;

sizeBox.addEventListener("dblclick", function() {
    if (val == 100) {
        val = 150;
    } else if (val == 150) {
        val = 200;
    } else if (val >= 200) {
        val = 100;
    }

    sizeBox.style.width = val + "px";
    sizeBox.style.height = val + "px";
    currentSize.innerText = val + "px";

    // 인덱스 증가 (순환)
    // 새로운 크기로 width, height 변경
    // 텍스트 업데이트
});


// 문제 3: 키보드 입력과 실시간 표시
/*
1. 요소들 선택하기
const textInput = document.querySelector("#textInput");
const display = document.querySelector("#display");

2. input 이벤트 리스너 (실시간 입력 감지)
textInput.addEventListener("input", function() {
    // 입력된 텍스트와 길이 가져오기
    // display에 "텍스트" - 글자 수: 숫자 형태로 표시
});

3. keyup 이벤트 리스너 (ESC 키 감지)
textInput.addEventListener("keyup", function(e) {
    // e.key가 "Escape"인지 확인
    // 맞다면 입력창과 표시창 초기화
});
*/
const textInput = document.querySelector("#textInput");
const display = document.querySelector("#display");

textInput.addEventListener("input", function() {
    // 입력된 텍스트와 길이 가져오기
    // display에 "텍스트" - 글자 수: 숫자 형태로 표시
    display.textContent = `${textInput.value} - 글자 수: ${textInput.value.length}`;
});

textInput.addEventListener("keyup", function(e) {
    // e.key가 "Escape"인지 확인
    // 맞다면 입력창과 표시창 초기화
    if (e.key === "Escape"){
        textInput.value = "";   // 값 초기화
        display.textContent = "글자 수: 0";
    }
});


// 문제 4: 마우스 호버와 이미지 토글
/*
1. 요소들 선택하기
const toggleImage = document.querySelector("#toggleImage");
const hideBtn = document.querySelector("#hideBtn");
const showBtn = document.querySelector("#showBtn");

2. 마우스 호버 이벤트
toggleImage.addEventListener("mouseenter", function() {
    // 숨김 버튼 보이기
});

toggleImage.addEventListener("mouseleave", function() {
    // 숨김 버튼 숨기기
});

3. 버튼 클릭 이벤트
hideBtn.addEventListener("click", function() {
    // 이미지 박스 숨기기, 숨김 버튼 숨기기, 다시보기 버튼 보이기
});

showBtn.addEventListener("click", function() {
    // 이미지 박스 보이기, 다시보기 버튼 숨기기
});
*/

// 문제 5: 폼 검증과 결과 표시
/*
1. 요소들 선택하기
const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");

2. 검증 버튼 클릭 이벤트
submitBtn.addEventListener("click", function() {
    // 입력값 가져오기 (이름은 trim(), 나이는 parseInt())

    // 검증 로직
    // 이름: 한글 정규표현식 검사
    // 나이: 1~120 범위 검사

    // 결과에 따라 메시지와 스타일 적용
});

3. Enter 키 지원
nameInput.addEventListener("keyup", function(e) {
    // Enter 키면 검증 실행
});

ageInput.addEventListener("keyup", function(e) {
    // Enter 키면 검증 실행
});
*/
