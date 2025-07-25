const 인풋1 = document.getElementById("input1");

// 양수인지 검사하는 기능 설정
function 체크1() {
  const val = Number(인풋1.value); //입력받는 값을 숫자로 변경

  // 만약에 클라이언트가 입력한 숫자값이 0보다 클 경우 = true
  if (val > 0) {
    alert("클라이언트가 입력한 숫자는 0보다 큰 양수입니다.");
  }
  // 만약에 클라이언트가 입력한 숫자값이 0이랑 같거나 0보다 작을경우 = true
  if (val <= 0) {
    alert("클라이언트가 입력한 숫자는 0과 같거나 음수입니다.");
  }
}

function 체크2() {
  const 인풋2 = document.getElementById("input2");
  const 값 = Number(인풋2.value);
  if (값 > 0) {
    alert("양수입니다.");
  } else {
    alert("음수입니다.");
  }
}

const inputAge = document.getElementById("inputAge");

// 확인하기 버튼을 클릭했을 때
function 체크4() {
  // 입력한 나이 값 얻어오기
  const 받아온나이값 = Number(inputAge.value);
  // 1. 0미만 150초과 -> 잘못 입력 하셨습니다.
  // 2.   0세 ~  13세 -> 어린이
  // 3.  14세 ~  19세 -> 청소년

  // ||  = or  , 또는 양쪽 중에서 둘 중 하나라도 참일 경우 = true
  // &&  = and , 양쪽 모두 참일 경우                      = true
  if (받아온나이값 < 0 || 받아온나이값 > 150) {
    alert("잘못 입력 하셨습니다.");
  } else if (받아온나이값 >= 0 && 받아온나이값 <= 13) {
    alert("어린이");
  } else if (받아온나이값 <= 19) {
    alert("청소년");
  } else {
    alert("성인");
  }
}
