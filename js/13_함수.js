/* 매개변수, 전달 인자 */
const input1 = document.getElementById("input1"); // querySelector -> #을 작성하지 않아도 되는 메서드로 교체: getElementById()
const btn1 = document.getElementById("btn1");

/* btn1 클릭 시 #input1의 값을 읽어와 print1() 함수를 호출 */

// 자주 사용하는 기능을 분리해서
// 기능 명칭으로 사용할 수 있다!
function print1(num, str) {
  alert(`${num} 은(는) ${str} 입니다.`);
}

btn1.addEventListener("click", function () {
  const value = input1.value;

  // input1에 값이 입력이 안되었거나, 빈칸만 입력된 경우
  if (value.trim().length == 0) {
    // console.log("숫자를 입력해주세요.");
    // console.log -> 개발자가 문제를 확인하는 수단
    // 소비자가 문제를 확인할 수 있도록 변경
    // alert
    alert("숫자를 입력해주세요.");
    return; // 함수 종료 + 호출한 곳으로 돌아감!
  }
  console.log("return이 여기까지 오는지 확인");

  let result;
  /*
        if (Number(value) == 0) {
          result = "0";
        } else if (Number(value) > 0) {
          result = "양수";
        } else {
          result = "음수";
        }
      */
  // 결과가 하나일 때는 중괄호 생략 O
  if (Number(value) == 0) result = "0";
  else if (Number(value) > 0) result = "양수";
  else result = "음수";

  /* 함수 호출(값 전달) */
  /* [!!중요!!] 전달되는 값의 순서가 중요하다 */
  print1(value, result);
  print1(result, value); // 순서를 반대로 적용
});

const btn3a = document.getElementById("btn3a");
btn3a.addEventListener("click", function () {
  const numbers = [];

  numbers[0] = 30;
  numbers[2] = 10;
  console.log(numbers);

  /* 배열.push(값): 배열의 마지막 요소로 값을 추가 */
  numbers.push(30); // index 2번째 자리 다음에 30 추가.
  console.log(numbers);

  numbers.push(pow(2, 4)); // == numbers.push(16)과 같다. (정처기에 출제된 적 O, pow(num1, num2):거듭제곱)
  // push나 numbers[인덱스번호] 를 이용해서 값을 추가할 때
  // 함수로 만든 기능을 활용해서 숫자나 글자를 추가할 수 있다.
});

// 전달받은 수를 x제곱해서 반환하는 방식
function pow(num, x) {
  let result1 = 1; // 곱했을 때 결과에 영향을 주지 않기 위해 1로 초기화.

  for (let i = 0; i < x; i++) {
    result *= num;
  }
  return result;
}

/* 화살표 함수 */
// 클래스가 arrow 인 요소를 모두 가져오기 (배열 Array 형태로 확인할 것)
const arrowList = document.querySelectorAll(".arrow"); // querySelector만 쓰면 맨 위의 한 개만 봄.
// (arrow 클래스만 확인하기 위해 class명으로 지정)
console.log("arrowList 확인: ", arrowList);

/* 화살표 함수 기본 형태 */
arrowList[0].addEventListener("click", () => {
  alert("화살표 함수 기본 형태 실습");
});

/* 매개변수가 1개인 경우 () 생략 가능 */
arrowList[1].addEventListener("click", (e) => {
  // e       : 이벤트 객체(모든 이벤트 관련 정보가 담겨있는 객체)
  // e.target: 이벤트가 발생한 요소
  e.target.style.backgroundColor = "hotpink";
  // e.target이 현재 두 번째 <button>을 가리키고 있고,
  // 해당 버튼의 스타일인 배경색을 변경하는 것.
});

/* return 한 줄만 작성된 경우 */
arrowList[2].addEventListener("click", (e) => {
  // alert(input1 + input2);
  // alert(더하기기능(input1, input2));   // 1탄
  // alert((input1, input2) => input1 + input2);
  // -> "화살표 함수 자체를 출력하겠다"
  // (input1, input2) => input1 + input2 내용이 그대로 출력
  // 더하기 계산식이 되지 않고, 더하기 계산방법을 보여주는 형태.

  계산기능((a, b) => a + b); // (a, b) => a + b가 게산기능()의 매개변수로 전달됨.
  계산기능((a, b) => a - b);
  계산기능((a, b) => a * b);
  /*
    계산기능((a, b) => a + b);
    <작동 방식>
    1. 계산기능() 함수를 찾음
    2. '(a, b) => a + b'를 계산기능()의 매개변수로 전달
    ---- [여기서부터는 계산기능()함수 내부] ----
        그러면 코드는 사실상
            function 계산기능((a, b) => a + b){
                const input1 = Number(prompt("첫 번째 값"));
                const input2 = Number(prompt("두 번째 값"));
                alert((input1, input2) => input1 + input2);
            }
        같은 모습으로 작동
    3. 사용자가 첫 번째 값 입력 -> input1로 전달
    4. 사용자가 두 번째 값 입력 -> input2로 전달
    5. alert()함수 작동 -> 익명함수기능(input1, input2) 작동
        ---- [여기서부터는 익명함수기능()함수 내부] ----
    6. a 자리에 input1, b 자리에 input2
    7. 계산
  */
});

// 1탄: 일반 함수로 선언
function 계산기능(익명함수기능) {
  const input1 = Number(prompt("첫 번째 값"));
  const input2 = Number(prompt("두 번째 값"));
  alert(익명함수기능(input1, input2));
}

arrowList[3].addEventListener("click", () => {
  // const obj = 기능("홍길동", 20);

  // 매개변수가 2개 이상일 때는 ()로 감싸줘야 함.
  확인하기((name, age) => {
    return {
      name: name, // 매개변수 name은 name으로 전달
      age: age,
    };
    // JS   {      Key        :          Value        , Key: Value}
    //     값을 꺼내기 위한 키 : 키 내부에 들어있는 값
  });
});

function 확인하기(기능) {
  const obj = 기능("홍길동", 20);

  console.log("obj.name: ", obj.name);
  console.log("obj.age: ", obj.age);
}
