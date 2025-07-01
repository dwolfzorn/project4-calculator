// Basic math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error";
  return a / b;
}

// Operate function
function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: return null;
  }
}

// Calculator state
let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

digitButtons.forEach(button => {
  button.addEventListener('click', () => appendDigit(button.textContent));
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => setOperator(button.textContent));
});

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);

function appendDigit(digit) {
  if (display.textContent === '0' || shouldResetDisplay) {
    display.textContent = digit;
    shouldResetDisplay = false;
  } else {
    display.textContent += digit;
  }
}

function setOperator(operator) {
  if (currentOperator !== null) evaluate();
  firstNumber = display.textContent;
  currentOperator = operator;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  secondNumber = display.textContent;
  const result = operate(currentOperator, firstNumber, secondNumber);
  display.textContent = result;
  firstNumber = result;
  currentOperator = null;
}

function clear() {
  display.textContent = '0';
  firstNumber = '';
  secondNumber = '';
  currentOperator = null;
  shouldResetDisplay = false;
}
