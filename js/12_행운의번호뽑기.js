/*
const
lottoResult
lottoBtn

id값을 이용해서
click 기능을 눌렀을 때

Math.floor(Math.random() * 45) + 1;

num1 ~ num6
난수 생성해서
innertext로 화면 출력하기
 */

const lottoResult = document.getElementById("lottoResult");
const lottoBtn = document.getElementById("lottobutton");

lottoBtn.addEventListener("click", function(){
    let result = "";   // 결과 담을 변수를 먼저 선언
    for(let i=0; i<6; i++){   // let: 안에 있는 변수의 값이 변할 수 O, const는 변수의 값이 변하면 안 됨.
        const num = Math.floor(Math.random() * 45) + 1;

        if(i===0) {
            result = num;   // 제일 첫 반복문-i가 0일 때는 num을 그대로 result에 저장
        } else if(i===5) {
            result = result + ' + ' + num;
        } else {
            result = result + ', ' + num;   // 그 다음부터는 누적된 result 뒤에 덧붙여서 저장
        }
        // 만약에 i가 5라면 " + "를 붙여서 num 추가하기
    }
    lottoResult.innerText = result;
});