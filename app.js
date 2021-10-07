// import functions
import { add, minus, multiply, divide } from './calculations.js';

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

// set event listeners 
addButton.addEventListener('click', () => {
    // get user input(s)
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;
    // do any needed work with the value(s)
    const sum = add(num1, num2);
    // update DOM to reflect new value(s)
    addAnswer.textContent = sum;
});

const subtractNumber1 = document.getElementById('subtract-number-1');
const subtractNumber2 = document.getElementById('subtract-number-2');
const subtractButton = document.getElementById('subtract-button');
const subtractAnswer = document.getElementById('subtract-answer');

subtractButton.addEventListener('click', () => {
    const num1 = +subtractNumber1.value;
    const num2 = +subtractNumber2.value;
    const subtract = minus(num1, num2);
    subtractAnswer.textContent = subtract;
});

const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

multiplyButton.addEventListener('click', () => {
    const num1 = +multiplyNumber1.value;
    const num2 = +multiplyNumber2.value;
    const multiplication = multiply(num1, num2);
    multiplyAnswer.textContent = multiplication;
});

const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

divideButton.addEventListener('click', () => {
    const num1 = +divideNumber1.value;
    const num2 = +divideNumber2.value;
    const quotient = divide(num1, num2);
    divideAnswer.textContent = quotient;
});
