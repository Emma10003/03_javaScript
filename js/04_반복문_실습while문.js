/*
        주문완료기능 을 이용해서 switch case 으로 주문 완료
        
        let orders; 라는 명칭으로 주문 담을 것
        */

//  id="menuSelect"
// const 를 이용해서 아이디값 가져오기
// id 위치(요소 나 태그) 를 바라보거나, value 값을 확인할 때는
// let보다 const를 사용하는 것이 바람직함

let orders = ""; // let orders 내부에 값이 존재하지 않기 때문에 undefined
let 주문번호 = 0; //카운터 기능 추가
function 주문추가기능() {
  const menu = document.getElementById("menuSelect").value;
  // 고객이 원하는 메뉴를 주문하는 것은 다양한 선택지가 존재하기 때문에
  // let 을 사용하는 것
  let foodName, price;
  // 애초에 빈 공간 빈 공간임을 개발자의 눈으로 확인하길 원한다면
  // let orders = ""; 와 같은 형식으로 작성해 놓을 수 있음
  switch (menu) {
    case "1":
      foodName = "피자";
      price = 15000;
      break;
    case "2":
      foodName = "치킨";
      price = 18000;
      break;
    case "3":
      foodName = "햄버거";
      price = 8000;
      break;
    case "4":
      foodName = "음료";
      price = 3000;
      break;
    default:
      alert("선택 후 주문해주세요.");
      break;
  }

  // 주문 추가
  // orders = orders + foodName + " - " + price + "원<br>";

  //    ++주문번호는 주문을 1개 추가한 상태에서
  //    현재 주문이 어디까지 진행됐는지 바로 확인

  //    주문번호++는 주문이 추가되기 전 상태를 확인
  orders = `${orders} ${foodName}  - ${price} 원    *   ${++주문번호} 개 <br>`;

  // 주문에 대한 결과를 화면에 보여주기
  document.getElementById("result").innerHTML = orders;
  /*
        document.getElementById("result").innerHTML = `
        <h3>주문목록</h3>
        ${foodName}
        <p>${price}원</p>
        <hr/>
        `;
        */
}

// 주문 초기화 기능 완성
function 주문초기화기능() {
  orders = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("menuSelect").value = "";
}
/*
      orders      ="";
      innerHTML   ="";
      value       ="";
      */

function 주문완료기능() {
  // 만약에 orders가 빈값이라면 alert 주문한 메뉴가 없습니다. 띄우기
  if (orders == "") {
    alert("주문한 메뉴가 없습니다.");
  } else {
    alert("주문 완료되었습니다.");
  }
  // 주문이 존재한다면 alert 주문 완료되었습니다 띄우기
  // 주문을 완료하고 orders를 비우기
  주문초기화기능();
}
