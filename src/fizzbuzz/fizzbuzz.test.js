const { fizzbuzz } = require("./fizzbuzz");

test('1から15まで繰り返しFizzBuzzする', () => {
  expect(fizzbuzz(15)).toEqual(
    ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
  )
});