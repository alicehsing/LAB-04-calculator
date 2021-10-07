// IMPORT MODULES under test here:
import { add, divide, minus, multiply, } from '../calculations';

const test = QUnit.test;

// function add(num1, num2) {
//     return num1 + num2;
// }

// name your test by what it is testing
test('adds two numbers 5 and 3', (expect) => {
    //1. Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 4;
    const expected = 8;

    //2. Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


// name your test by what it is testing
test('subtract two numbers 6 and 2', (expect) => {
    //1. Arrange
    // Set up your arguments and expectations
    const x = 6;
    const y = 2;
    const expected = 4;

    //2. Act 
    // Call the function you're testing and set the result to a const
    const actual = minus(x, y); // use your function here

    //3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply two numbers 5 and 2', (expect) => {
    //1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 2;
    const expected = 10;

    //2. Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y); // use your function here

    //3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide two numbers 8 and 2', (expect) => {
    //1. Arrange
    // Set up your arguments and expectations
    const x = 8;
    const y = 2;
    const expected = 4;

    //2. Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y); // use your function here

    //3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

