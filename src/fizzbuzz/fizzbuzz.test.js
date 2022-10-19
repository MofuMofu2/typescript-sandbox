const { fizzbuzz } = require("./fizzbuzz");

test('3の倍数なら`Fizz`を返す', () => {
  expect(fizzbuzz(9)).toBe('Fizz');
})

test('5の倍数なら`Buzz`を返す', () => {
  expect(fizzbuzz(10)).toBe('Buzz');
})

test('3と5の倍数なら`FizzBuzz`を返す', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz');
})

test('それ以外なら数字をそのまま返す', () => {
  expect(fizzbuzz(1)).toBe(1);
})

test('1から15まで繰り返しFizzBuzzする', () => {
  expect(fizzbuzz(15)).toEqual(
    ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
  )
});