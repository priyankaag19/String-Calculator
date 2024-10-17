const stringCalculator = require('./mystringCalculator');

test('should return 0 for an empty string', () => {
    expect(stringCalculator.add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
    expect(stringCalculator.add("1")).toBe(1);
});

test('should return the sum of two comma-separated numbers', () => {
    expect(stringCalculator.add("1,2")).toBe(3);
});

test('should return the sum of multiple comma-separated numbers', () => {
    expect(stringCalculator.add("1,2,3")).toBe(6);
});

test('should handle newlines between numbers', () => {
    expect(stringCalculator.add("1\n2,3")).toBe(6);
});

test('should handle custom delimiters', () => {
    expect(stringCalculator.add("//;\n1;2")).toBe(3);
});

test('should throw an exception for negative numbers', () => {
    expect(() => stringCalculator.add("1,-2")).toThrow("negative numbers not allowed -2");
});

test('should throw an exception listing all negative numbers', () => {
    expect(() => stringCalculator.add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
});
