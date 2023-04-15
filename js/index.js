let calculatorButtonNumber = document.querySelectorAll(".number"); // Получения id кнопок чисел.
let calculatorButtonOperation = document.querySelectorAll(".operation"); // Получает id кнопок операторов.
let calculatorDisplay = document.querySelector("#input-area"); // Получения id экрана.
let calculatorDisplayClear = document.querySelector("#Clear"); // Кнопка очистки.
let calculatorButtonBack = document.querySelector("#Back"); // Кнопака удаления одного элемента.
let performedOperations = [];

Array.from(calculatorButtonNumber).forEach((element) => {element.addEventListener("click", clickNumber)})
Array.from(calculatorButtonOperation).forEach((element) => {element.addEventListener("click", clickOperation)})

calculatorDisplayClear.addEventListener("click", () => {
    calculatorDisplay.innerHTML = "";
    performedOperations = [];
})

calculatorButtonBack.addEventListener("click", () => {
    performedOperations.pop();
    calculatorDisplay.innerHTML = performedOperations.join("");
})

function clickNumber() {
    calculatorDisplay.innerHTML += this.id;
    performedOperations.push(this.id)
}

function clickOperation() {
    if(performedOperations.length != 0 && /[0-9]$/.test(performedOperations[performedOperations.length-1])){
        calculatorDisplay.innerHTML += this.id;
        performedOperations.push(this.id)
    }
}