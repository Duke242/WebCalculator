let leftOperand = "";
let rightOperand = "";
let operator = "";

const displayValue = document.getElementById("displayValue");

// currentOperationScreen.innerText = displayValue;

const operations = document.querySelectorAll(".operation");
for (let i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", function (e) {
    console.log(e.target.id);
    operator = e.target.id;
    leftOperand = displayValue.innerText;
    displayValue.innerText = "";
    return e.target.id;
  });
}

function operate(leftOperand, rightOperand, operator) {
  let a = parseInt(leftOperand);
  let b = parseInt(rightOperand);
  if (operator === "+") return a + b;
  if (operator === "*") return a * b;
  if (operator === "/") return a / b;
  if (operator === "-") return a - b;
  /*Throw error*/
}

const equalSign = document.querySelector(".equalSign");
equalSign.addEventListener("click", function (e) {
  console.log(rightOperand);
  rightOperand = displayValue.innerText;
  let resultant = operate(leftOperand, rightOperand, operator);
  console.log("leftOperand = " + leftOperand);
  console.log("rightOperand = " + rightOperand);
  console.log("operator = " + operator);
  console.log("resultant = " + resultant);
});

const numberButton = document.querySelectorAll(".numberButton");
for (i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", (e) => {
    displayValue.innerText = displayValue.innerText + e.target.id;
    console.log(displayValue);
  });
}