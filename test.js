// test stringfunction

const {stringLength, reverseString, Calculator, capitalize} = require('./index');

test ('add hello, return 5', () =>{
  expect(stringLength('hello')).toBe(5);
});

test ('add hello world, should return ERROR length not supported', () => {
  expect(stringLength('hello world')).toBe('ERROR length not supported');  
});

test('add empty, should return ERROR length not supported', () => {
  expect(stringLength('')).toBe('ERROR length not supported');
});

// test reverseString 

test ('add 1 + 1, return 2', () =>{
  expect(reverseString('hello')).toBe('olleh');
});

// test capitalize 

test ('add hello, return Hello', () =>{
  expect(capitalize('hello')).toBe('Hello');
});

test ('add cat, return Cat', () =>{
  expect(capitalize('cat')).toBe('Cat');
});


//---------------------------
// test calculator add.method

describe('add method for calculator', () => {
  test('1 + 1 = 2', () => {
    const calculadora = new Calculator(1,1);
    expect(calculadora.add()).toBe(2);
  });
  test('3 + 2 = 5', () => {
    const calculadora = new Calculator(3,2);
    expect(calculadora.add()).toBe(5);
  });
  test('4 + 5 = 9', () => {
    const calculadora = new Calculator(4,5);
    expect(calculadora.add()).toBe(9);
  });
});

// test calculator subs.method 

describe('subtract method for calculator', () => {
  test('1 - 1 = 0', () => {
    const calculadora = new Calculator(1,1);
    expect(calculadora.subtract()).toBe(0);
  });
  test('3 - 2 = 1', () => {
    const calculadora = new Calculator(3,2);
    expect(calculadora.subtract()).toBe(1);
  });
  test('5 - 5 = 0', () => {
    const calculadora = new Calculator(5,5);
    expect(calculadora.subtract()).toBe(0);
  });
});

// test calculator div.method

describe('divide method for calculator', () => {
  test('1 / 1 = 1', () => {
    const calculadora = new Calculator(1,1);
    expect(calculadora.divide()).toBe(1);
  });
  test('15 / 3 = 5', () => {
    const calculadora = new Calculator(15,3);
    expect(calculadora.divide()).toBe(5);
  });
  test('50 / 5 = 10', () => {
    const calculadora = new Calculator(50,5);
    expect(calculadora.divide()).toBe(10);
  });
});

// test calculator mult.method

describe('subtract method for calculator', () => {
  test('1 * 10 = 10', () => {
    const calculadora = new Calculator(1,10);
    expect(calculadora.multiply()).toBe(10);
  });
  test('3 * 2 = 6', () => {
    const calculadora = new Calculator(3,2);
    expect(calculadora.multiply()).toBe(6);
  });
  test('5 * 5 = 25', () => {
    const calculadora = new Calculator(5,5);
    expect(calculadora.multiply()).toBe(25);
  });
});