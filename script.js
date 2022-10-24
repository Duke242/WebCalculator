let leftOperand = "";
let rightOperand = "";
let operator = "";

let clearBtn = document.getElementById("clearButton");
clearBtn.addEventListener("click", () => {
  display.value = 0;
});

const display = document.getElementById("display");

const operations = document.querySelectorAll(".operation");
operations.forEach((op) => {
  op.addEventListener("click", (e) => {
    operator = e.target.id;
    leftOperand = display.value;
    display.value = 0;
  });
});



const operate = (leftOperand, rightOperand, operator) => {
  let a = +leftOperand;
  let b = +rightOperand;

  switch (operator) {
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "-":
      return a - b;
  }
};

const equalSign = document.querySelector(".equalSign");
equalSign.addEventListener("click", (e) => {
  rightOperand = display.value;
  let resultant = operate(leftOperand, rightOperand, operator);
  display.value = resultant;
  if operator === "/" && rightOperand === 0 { 
    display.value = "Error"
    alert("Can not divide by 0!")
  }
});

document.querySelectorAll(".number").forEach((num) => {
  num.addEventListener("click", (e) => {
    
    let existing = display.value;
    let incoming = e.target.id;
    if (incoming === "dot") {
      if (!existing.includes(".")) {
        incoming = ".";
      } else {
        return;
      }
    }
    if (existing === "0") {
      existing = "";
    }

    display.value = `${existing}${incoming}`;
  });
});


