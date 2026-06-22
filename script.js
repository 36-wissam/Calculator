// Get references to the buttons and display
const NumberButtons = document.querySelectorAll('.btn');
const Display = document.getElementById('display');
const ClearButton = document.getElementById('clear');
const EqualsButton = document.getElementById('equals');
const OperatorButtons = document.querySelectorAll('.operator');


// Add event listeners to the buttons
NumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        Display.value += button.textContent;
    });
});

ClearButton.addEventListener('click', () => {
    Display.value = '';
});
OperatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        Display.value += button.textContent;
    });
});
