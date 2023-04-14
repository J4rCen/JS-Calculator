let calculatorButton = document.getElementById("button-area"); // Получения id кнопок.
let calculatorDisplay = document.getElementById("input-area"); // Получения id экрана.
let performingAnOperation = [];
let numbers = ["0","1","2","3","4","5","6","7","8","9", "."]
let operation = ["+", "-", "*", "/"];



calculatorButton.addEventListener("click", e => {
    switch(e.target.innerText) {
        case "C":
            performingAnOperation = [];
            calculatorDisplay.innerHTML = "";
        break;

        case "back": 
            performingAnOperation.pop();
            calculatorDisplay.innerHTML = performingAnOperation.join("");
        break;

        case "=":
            let value = "";
            let value2 = "";
            
            for(let i = 0; i < performingAnOperation.length; i++) {
                debugger
                if (operation.indexOf(performingAnOperation[i]) == -1) {
                    value += performingAnOperation[i];
                }
            }

            calculatorDisplay.innerHTML += value;
        break;

        default:
            performingAnOperation.push(e.target.innerText)
            calculatorDisplay.innerHTML += e.target.innerText
        break;
    }
})