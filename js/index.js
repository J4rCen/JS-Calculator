let calculatorButtonNumber = document.querySelectorAll(".number"); // Получения id кнопок чисел.
let calculatorButtonOperation = document.querySelectorAll(".operation"); // Получает id кнопок операторов.
let calculatorDisplay = document.querySelector("#input-area"); // Получения id экрана.
let calculatorDisplayClear = document.querySelector("#Clear"); // Кнопка очистки.
let calculatorButtonBack = document.querySelector("#Back"); // Кнопака удаления одного элемента.
let calculatorConclusion = document.querySelector("#Conclusion"); //Кнопка равно.
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

calculatorConclusion.addEventListener("click", () => {
    let str = "";
    let arr = [];
    let result = 0;
    
    for(let a in performedOperations) {
        if(!(/\/|\+|\-|\*/.test(performedOperations[a]))) {
            str += performedOperations[a]
        } else {
            arr.push(str)
            arr.push(performedOperations[a])
            str = "";
        }
    }

    arr.push(str)

    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case "+":
                result = +arr[i-1] + +arr[i+1];
                break;
            case "-":
                result = +arr[i-1] - +arr[i+1];
                break;

            case "/":
                result = +arr[i-1] / +arr[i+1];
                break;

            case "*":
                result = +arr[i-1] * +arr[i+1];
                break;
        }
    }

    calculatorDisplay.innerHTML = result;
    performedOperations = [];
    performedOperations.push(result);
})

function clickNumber() {
    performedOperations.push(this.id)
    calculatorDisplay.innerHTML += this.id;
}

function clickOperation() {
    if(/[0-9]$/.test(performedOperations[performedOperations.length-1])){
        calculatorDisplay.innerHTML += this.id;
        performedOperations.push(this.id)
    }
}