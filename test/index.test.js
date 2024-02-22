const add = require('../index');

test('check if correctly adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
});