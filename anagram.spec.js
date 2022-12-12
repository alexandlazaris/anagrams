const anagram = require('./index');

test('number of operations needed for 123456 is 3', () => {
    expect(anagram("123456")).toBe(3); 
});

test('number of operations needed for 456546 is 0', () => {
    expect(anagram("456546")).toBe(0); 
});

test('number of operations needed for 1223724231 is 1', () => {
    expect(anagram("1223724231")).toBe(1); 
});

test('number of operations needed for 34535435 is 1', () => {
    expect(anagram("34535435")).toBe(1); 
});