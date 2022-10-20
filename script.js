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

// for (let i = 0; i < operations.length; i++) {
//   operations[i].addEventListener("click", (e) => {
//     console.log(e.target.id);
//     operator = e.target.id;
//     leftOperand = display.value;
//   });
// }

const operate = (leftOperand, rightOperand, operator) => {
  let a = +leftOperand;
  let b = +rightOperand;
  // if (operator === "+") return a + b;
  // if (operator === "*") return a * b;
  // if (operator === "/") return a / b;
  // if (operator === "-") return a - b;
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
});

document.querySelectorAll(".number").forEach((num) => {
  num.addEventListener("click", (e) => {
    // if (display.value === "0") {
    //   display.value = e.target.id;
    // } else {
    //   display.value += e.target.id;
    // }

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

// for (i = 0; i < numberButton.length; i++) {
//   numberButton[i].addEventListener("click", (e) => {
//     display.value = "";
//     display.value += e.target.id;
//   });
// }
