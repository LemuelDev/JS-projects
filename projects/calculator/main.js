




let firstOperand = "";
let secondOperand = "";
let operator = "";

// Function to add a digit or operator to the display
function addToDisplay(value) {
  document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = "";
  firstOperand = "";
  secondOperand = "";
  operator = "";
}

// Function to perform the calculation
function calculate() {
  // Get the display value
  let displayValue = document.getElementById("display").value;

  // Split the display value into operands and operator
  let operands = displayValue.split(operator);

  // Parse the operands as numbers
  firstOperand = parseFloat(operands[0]);
  secondOperand = parseFloat(operands[1]);

  // Perform the calculation based on the operator
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    default:
      result = 0;

  }

  // Update the display with the result
  document.getElementById("display").value = result;

  // Reset the variables
  firstOperand = "";
  secondOperand = "";
  operator = "";
}

// Add event listeners to the operator buttons
document.querySelector('input[value="+"]').addEventListener("click", function () {
  operator = "+";
});
document.querySelector('input[value="-"]').addEventListener("click", function () {
  operator = "-";
});
document.querySelector('input[value="*"]').addEventListener("click", function () {
  operator = "*";
});
document.querySelector('input[value="/"]').addEventListener("click", function () {
  operator = "/";
});