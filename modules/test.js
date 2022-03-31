lib = require('./index.js');
Calculator = require('./calculator.js')

test('gets length of a string', () => {
    expect(lib.stringLength('bag')).toBe(3);
    expect(lib.stringLength('greatness')).toBe(9);
    expect(()=>lib.stringLength('ajnidwunc9noweec')).toThrow(Error);
});

test('reverse string', () => {
    expect(lib.reverseString('bag')).toBe('gab');
});

test('Capitalize string', () => {
    expect(lib.capitalize('bag')).toBe('Bag');
    expect(lib.capitalize('remit')).toBe('Remit');
})

let calculator = new Calculator();
describe('Simple calculator', () => {
    test('add numbers',() => {
        expect(calculator.add(3, 4)).toBe(7);
    })

    test('subtract two numbers', () => {
        expect(calculator.subtract(21, 9)).toBe(12);
    })

    test('multiply numbers', () => {
        expect(calculator.multiply(1, 1, 4, 5)).toBe(20);
    })

    test('Divide two numbers', () => {
        expect(calculator.divide(40, 5)).toBe(8);
    })
})