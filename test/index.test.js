const {add, multiply} = require('../index');

test('check if correctly adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
});

test('check if multiplication functions works correctly', () => {
    expect(multiply(10,40)).toBe(400);
});