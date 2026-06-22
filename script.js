const NumberButtons = document.querySelectorAll('.btn');
const Display = document.getElementById('display');
const ClearButton = document.getElementById('clear');
const EqualsButton = document.getElementById('equals');
const OperatorButtons = document.querySelectorAll('.operator');


NumberButtons.forEach(button => {
    button.addEventListener('click', () => {
        Display.value += button.textContent;
    });
});

ClearButton.addEventListener('click', () => {
    Display.value = '';
});

EqualsButton.addEventListener('click', () => {
    try {
        Display.value = eval(Display.value);
    } catch (error) {
        Display.value = 'Error';
    }
});

OperatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        Display.value += button.textContent;
    });
});
