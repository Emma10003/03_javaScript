// 1. 중복확인 버튼을 누름
// 2. 아이디중복확인 페이지가 팝업으로 뜸 (450*200 화면 가운데 위치)
// ------- 여기부턴 28_아이디중복확인js 에서 작성
// 3. 팝업에서 아이디 입력 후 확인 버튼을 누르면
// 4. inputId 부분에 아이디가 전달됨
// 5. 팝업창이 닫힘

const sendBtn = document.getElementById("send");

sendBtn.addEventListener("click", () => {
    // 팝업창에 입력된 값을 가져오기
    const childInput = document.getElementById("childInput").value;
    
    opener.document.getElementById("inputId").value = childInput;
    window.close();
});