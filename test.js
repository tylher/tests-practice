lib = require('./index.js');

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
} )