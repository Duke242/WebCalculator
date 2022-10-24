let leftOperand = "";
let rightOperand = "";
let operator = "";

const display = document.querySelector("#display input");

let clearBtn = document.getElementById("clearButton");
clearBtn.addEventListener("click", () => {
  display.value = 0;
  display.className = "operated";
});

document.querySelectorAll(".operation").forEach((op) => {
  op.addEventListener("click", (e) => {
    display.className = "operating";
    operator = e.target.id;
    leftOperand = display.value;
  });
});

const operate = (leftOperand, rightOperand, operator) => {
  const a = parseFloat(leftOperand);
  const b = parseFloat(rightOperand);

  if (operator === "/" && b === 0) {
    alert("Cannot divide by zero");
    return 0;
  } else {
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
  }
};

const equalSign = document.querySelector(".equalSign");
equalSign.addEventListener("click", (e) => {
  rightOperand = display.value;
  let resultant = operate(leftOperand, rightOperand, operator);
  display.value = resultant;
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
    if (existing === "0" || display.className === "operating") {
      existing = "";
    }
    display.className = "operated";

    display.value = `${existing}${incoming}`;
  });
});
