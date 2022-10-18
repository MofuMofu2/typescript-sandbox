const fizz = (n) => {
  return n % 3 === 0
}

const buzz = (n) => {
  return n % 5 === 0
}

// テストケースで検査する関数はfizzbuzzのみにしておく
const fizzbuzz = (n) => {
  if (fizz(n) && buzz(n)) {
    return 'FizzBuzz'
  } else if (fizz(n)) {
    return 'Fizz'
  } else if (buzz(n)) {
    return 'Buzz'
  } else {
    return n
  }
}

exports.fizzbuzz = fizzbuzz