const idCheckBtn = document.getElementById("idCheck");

// 1. 중복확인 버튼을 누름
// 2. 아이디중복확인 페이지가 팝업으로 뜸 (450*200 화면 가운데 위치)
// --------- 여기까지 27_회원가입.js 에서 작성
// 3. 팝업에서 아이디 입력 후 확인 버튼을 누르면
// 4. inputId 부분에 아이디가 입력됨

// 중복확인 버튼을 눌렀을 때 팝업 페이지가 뜨도록 함
idCheckBtn.addEventListener("click", () => {
    // 팝업창 위치 설정
    const width = 450;
    const height = 200;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    const options = `
    width = ${width}
    height = ${height}
    left = ${left}
    top = ${top}
    `;
    // 28_아이디중복확인.html 문서를 새로운 윈도우에 팝업으로 띄우기
    window.open("28_아이디중복확인.html", "_blank", options);
});
