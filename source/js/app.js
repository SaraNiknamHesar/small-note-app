let $ = document;
let inputFiled = $.getElementById("input-field");
let btnSave = $.querySelector("#btn-save");
let listed = $.querySelector("#listed");
let btnDelete = $.querySelector("#btn-delete");
let colorSelect = $.querySelector("#color-select").children;
btnDelete.addEventListener("click", deleteItem);
btnSave.addEventListener("click", addText);
Array.from(colorSelect).forEach((element) => {
    element.addEventListener("click", (color) => {
        inputFiled.style.backgroundColor = color.target.style.backgroundColor;

    });

});
function addText() {
    let newCard = document.createElement("div");
    newCard.classList.add("card", "shadow-sm", "rounded");
    listed.append(newCard);
    let innerCard = document.createElement("p");
    innerCard.classList.add("card-text", "p-3");
    innerCard.style.backgroundColor = inputFiled.style.backgroundColor;
    newCard.append(innerCard);
    innerCard.innerHTML = inputFiled.value;
    inputFiled.value = "";
    inputFiled.style.backgroundColor = "";

}
function deleteItem() {
    let cardItem = $.querySelector(".card");
    if (cardItem) {
        cardItem.remove();
    }
}