<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>이벤트 실습</title>
    <style>
      .container3 {
        width: 200px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 20px 0;
      }

      #box3,
      #box4 {
        box-sizing: border-box;
        height: 200px;
        border: 1px solid black;
        background-color: lightgray;

        transition-duration: 0.5s;
      }

      .container3 > * {
        margin-bottom: 10px;
      }

      .container3 > *:last-child {
        margin-bottom: 0;
      }

      input[type="text"] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button {
        padding: 8px 12px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      button:hover {
        background: #0056b3;
      }

      #box4 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }

      #box4 input,
      #box4 button {
        width: 80%;
      }
    </style>
  </head>
  <body>
    <h3>입력한 색상으로 배경색 변경하기</h3>
    <div class="container3">
      <div id="box3"></div>
      <input type="text" id="input3" placeholder="색상입력" />
      <button id="btn3">변경하기</button>
      <script>
        /* 입력한 색상으로 배경색 변경하기 */
        const box3 = document.getElementById("box3");
        const input3 = document.getElementById("input3");
        const btn3 = document.getElementById("btn3");

        /* #btn3 클릭했을 때 */
        btn3.addEventListener("click", function () {
          box3.style.backgroundColor = input3.value;
        });
      </script>
    </div>
    <div class="container3">
      <div id="box4">
        <input type="text" id="input4" placeholder="색상입력" />
        <button id="btn4">색상변경하기</button>
      </div>
    </div>
    <script>
      /* 입력한 색상으로 box4 와 버튼 배경색상 변경하기 */
      const box4 = document.getElementById("box4");
      const input4 = document.getElementById("input4");
      const btn4 = document.getElementById("btn4");
      btn4.addEventListener("click", function () {
        box4.style.backgroundColor = input4.value;
        btn4.style.backgroundColor = input4.value;
      });
    </script>
  </body>
</html>
