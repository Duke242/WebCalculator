let leftOperand = 0;
let rightOperand = 0;
let operator = "";

const display = document.querySelector("#display");
const input = document.querySelector("#display input");

const escPress = () => {
  input.value = 0;
  display.className = "operated";
  clearActive();
};

const clearActive = () => {
  document.querySelectorAll("button").forEach((op) => {
    op.classList.remove("active");
  });
};

let clearBtn = document.getElementById("clearButton");
clearBtn.addEventListener("click", (event) => {
  if (event.pointerId > 0) {
    escPress();
  }
});

const opDisplay = document.getElementById("operator");

const opPress = (op) => {
  operator = op === "/" ? "÷" : op;
  // if (op === "/") {
  //   operator = "÷";
  // } else {
  //   operator = op;
  // }

  display.className = "operating";
  opDisplay.textContent = operator;
  leftOperand = input.value;
  clearActive();
  document.getElementById(operator).classList.add("active");
};

document.querySelectorAll(".operation").forEach((op) => {
  op.addEventListener("click", (e) => {
    opPress(e.target.id);
  });
});

const operate = (leftOperand, rightOperand, operator) => {
  const a = parseFloat(leftOperand);
  const b = parseFloat(rightOperand);

  if (operator === "÷" && b === 0) {
    alert("Cannot divide by zero");
    return 0;
  } else {
    switch (operator) {
      case "+":
        return a + b;
      case "*":
        return a * b;
      case "÷":
      case "/":
        return a / b;
      case "-":
        return a - b;
      default:
        return 0;
    }
  }
};

const enterPress = () => {
  console.log({
    leftOperand,
    rightOperand,
    operator,
    op: operate(leftOperand, rightOperand, operator),
  });
  clearActive();
  document.getElementById("=").classList.add("active");
  input.value = operate(leftOperand, rightOperand, operator);
  leftOperand = input.value;
};

const equalSign = document.querySelector(".equalSign");
equalSign.addEventListener("click", (e) => {
  enterPress();
});

const numPress = (digit) => {
  let existing = input.value;
  let incoming = digit;
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
  input.value = `${existing}${incoming}`;
  rightOperand = input.value;
  clearActive();
  document.getElementById(digit).classList.add("active");
};

document.querySelectorAll(".number").forEach((num) => {
  num.addEventListener("click", (e) => {
    numPress(e.target.id);
  });
});

document.addEventListener("keyup", (event) => {
  event.stopPropagation();
  if (/^\d$/.test(event.key)) {
    numPress(event.key);
  } else if (["+", "-", "*", "/"].includes(event.key)) {
    opPress(event.key);
  } else if (event.key === "Enter") {
    enterPress();
  } else if (event.key === "Escape") {
    escPress();
  }
});
