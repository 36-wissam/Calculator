// Get references to the buttons and display
const NumberButtons = document.querySelectorAll('.btn');
const Display = document.getElementById('display');
const ClearButton = document.getElementById('clear');
const EqualsButton = document.getElementById('equals');
const OperatorButtons = document.querySelectorAll('.operator');

let currentInput = '';
let operator = null;
let firstOperand = null;
let expression = '';

// Format result to 3 decimal places max
function formatResult(value) {
    if (typeof value !== 'number') return value;
    return parseFloat(value.toFixed(3));
}

// Function to update the display
function updateDisplay() {
    Display.value = expression + currentInput;
}

function devideByZeroError() {
    Display.value = 'Error: Division by zero';
    currentInput = '';
    operator = null;
    firstOperand = null;
    expression = '';
}

// Function to handle number button clicks
function handleNumberClick(event) {
    const number = event.target.textContent;
    currentInput += number;
    updateDisplay();
}

// Function to perform the calculation
function performCalculation(operand1, operand2, operator) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 === 0) {
                return 'Error:Division by zero';
            }
            return operand1 / operand2;
        default:
            return operand2;
    }
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
    const op = event.target.textContent;

    if (currentInput === '' && firstOperand === null) return;

    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        const result = performCalculation(firstOperand, secondOperand, operator);

        if (result === 'Error:Division by zero') {
            devideByZeroError();
            return;
        }

        firstOperand = formatResult(result);
    }

    if (!isNaN(firstOperand)) {
        expression = firstOperand + op;
    } else {
        expression = '';
    }

    operator = op;
    currentInput = '';
    updateDisplay();
}

// Function to handle equals button click
function handleEqualsClick() {
    if (firstOperand !== null && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        const result = performCalculation(firstOperand, secondOperand, operator);

        if (result === 'Error: Division by zero') {
            devideByZeroError();
            return;
        }

        const formatted = formatResult(result);

        Display.value = formatted;

        currentInput = '';
        operator = null;
        firstOperand = formatted;
        expression = String(formatted);
    }
}

// Function to handle clear button click
function handleClearClick() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    expression = '';
    updateDisplay();
}

// Event listeners
NumberButtons.forEach(button => {
    button.addEventListener('click', handleNumberClick);
});

OperatorButtons.forEach(button => {
    button.addEventListener('click', handleOperatorClick);
});

EqualsButton.addEventListener('click', handleEqualsClick);
ClearButton.addEventListener('click', handleClearClick);