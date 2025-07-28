const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shopping-list");

const items = [];

function addItem() {
    const itemName = itemInput.value.trim();

    if (itemName === "") {
        alert("상품명을 입력하세요.");
        return;
    }

    items.push(itemName);

    let listText = "🛒 쇼핑 목록:\n\n";
    // for (let i = 0; i < items.length; i++) {
    //     listText += `${i + 1}. ${items[i]}\n`;
    // }

    // for문을 while문으로 변경하기
    let i = 0;
    while (i < items.length) {
        listText += `${i + 1}. ${items[i]}\n`;
        i++;
    }
    shoppingList.textContent = listText;

    itemInput.value = "";
    itemInput.focus();
}

addBtn.addEventListener("click", addItem);

itemInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        addItem();
    }
});
