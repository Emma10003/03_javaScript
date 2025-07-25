function 홀짝기능() {
  const 인풋2 = document.getElementById("input2");
  const val2 = Number(인풋2.value);
  if (val2 % 2 == 1) {
    // 홀수라면
    alert("홀수입니다.");
  } else {
    // 짝수라면
    alert("짝수입니다.");
  }
}

const 인풋3 = document.getElementById("input3");
const amount = Number(인풋3.value);
function 주행거리계산기능() {
  if (amount <= 3) {
    alert("3km 이하는 기본요금 3000");
  } else if (amount <= 10) {
    alert("3km 초과 10km 이하는 8000원");
  } else {
    alert("10km 이상은 모두 20000원 입니다.");
  }
}

/*
        1. 입력된 거리를 js로 가져오기
        const 인풋3
        const amount 에 value 값 저장

        3km 이하 기본요금 3000원
        3km 초과 10hm 이하 8000 원
        10km 초과 모두 20000원 
        alert 주행거리 비용은 000 입니다. 
        */
