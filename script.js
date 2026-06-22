// Get references to the buttons and display
const NumberButtons = document.querySelectorAll('.btn');
const Display = document.getElementById('display');
const ClearButton = document.getElementById('clear');
const EqualsButton = document.getElementById('equals');
const OperatorButtons = document.querySelectorAll('.operator');


let currentInput = '';
let operator = null;
let firstOperand = null;

// Function to update the display
function updateDisplay() {
    Display.value = currentInput;
}

// Add event listeners to number buttons
NumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        updateDisplay();
    });
});

// Add event listeners to operator buttons
OperatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '') {
            firstOperand = parseFloat(currentInput);
            operator = button.textContent;
            currentInput = '';
            updateDisplay();
        }
    });
});

// Add event listener to equals button
EqualsButton.addEventListener('click', () => {
    if (firstOperand !== null && operator !== null && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = null;
        firstOperand = null;
        updateDisplay();
    }
});

// Add event listener to clear button
ClearButton.addEventListener('click', () => {
    currentInput = '';
    operator = null;
    firstOperand = null;
    updateDisplay();
}); 