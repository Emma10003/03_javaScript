// 1. const elementById로 모든 HTML JavaScript 연결 설정하기
const randomCat = document.getElementById("randomCat");
const result = document.getElementById("result");
const content = document.getElementById("content");

randomCat.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => {
            console.log("data: ", data);
            /*
            데이터가 중괄호{}가 아닌 대괄호[] 형태로 시작하면 대부분 배열, 리스트 목록 형태의 데이터.
            data를 활용할 때는 data[0] 처럼 가져오고 싶은 index 번호를 사용
            [
                {
                    "id": "MTQ5NzM4Mg",
                    "url": "https://cdn2.thecatapi.com/images/MTQ5NzM4Mg.jpg",
                    "width": 638,
                    "height": 423
                }
                ]
            */
            content.innerHTML = `
            <strong>id : </strong>${data[0].id} <br>
            <strong>URL 주소 : </strong>${data[0].url} <br>
            <img src="${data[0].url}" alt="귀여운 고양이" class="cat-image">
            `;
        });
});
