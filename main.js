// 1. Global state variables to track inputs
let currentInput = "";   // Holds the number currently being typed
let firstNum = null;     // Stores the first number before an operator is pressed
let activeOperator = ""; // Stores the selected math operation

// 2. Button Input Function
function appendNumber(number) {
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

// 3. Operator Selection Logic
function setOperator(operatorName) {
  if (currentInput === "") return;
  
  firstNum = Number(currentInput);
  activeOperator = operatorName;
  currentInput = ""; // Clear input string so user can type the second number
  document.getElementById("display").value = ""; 
}

// 4. Advanced Math Operations (Instant execution)
function runSquare() {
  if (currentInput === "") return;
  let num = Number(currentInput);
  let result = num * num; // Exponent calculation
  document.getElementById("display").value = result;
  currentInput = String(result);
}

function runSquareRoot() {
  if (currentInput === "") return;
  let num = Number(currentInput);
  if (num < 0) {
    document.getElementById("display").value = "Error";
    currentInput = "";
    return;
  }
  let result = Math.sqrt(num);
  document.getElementById("display").value = result;
  currentInput = String(result);
}

// 5. Core Operational Logic (The functions you wrote)
function add(num1, num2) { return num1 + num2; }
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { 
  return num2 === 0 ? "Error (Cannot divide by 0)" : num1 / num2; 
}

// 6. Execution Trigger (The Equals Button)
function calculate() {
  if (firstNum === null || currentInput === "") return;
  
  const secondNum = Number(currentInput);
  let finalResult;

  // Directs traffic to your custom math functions
  if (activeOperator === "add") {
    finalResult = add(firstNum, secondNum);
  } else if (activeOperator === "subtract") {
    finalResult = subtract(firstNum, secondNum);
  } else if (activeOperator === "multiply") {
    finalResult = multiply(firstNum, secondNum);
  } else if (activeOperator === "divide") {
    finalResult = divide(firstNum, secondNum);
  } else if (activeOperator === "exponent") {
    finalResult = Math.pow(firstNum, secondNum);
  }

  document.getElementById("display").value = finalResult;
  
  // Reset engine states for the next calculation
  currentInput = String(finalResult);
  firstNum = null;
  activeOperator = "";
}

// 7. Clear and Delete Screen Control Functions
function clearDisplay() {
  currentInput = "";
  firstNum = null;
  activeOperator = "";
  document.getElementById("display").value = "";
}

function deleteLastDigit() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("display").value = currentInput || "0";
}
