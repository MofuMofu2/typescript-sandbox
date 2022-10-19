const fizz = (n) => {
  return n % 3 === 0
}

const buzz = (n) => {
  return n % 5 === 0
}

const judgeFizzBuzz = (n) => {
  if (fizz(n) && buzz(n)) {
    return 'FizzBuzz'
  } else if (fizz(n)) {
    return 'Fizz'
  } else if (buzz(n)) {
    return 'Buzz'
  } else {
    return n.toString()
  }
}

const fizzbuzz = (n) => {
  const param = []
  for (let i = 1; i <= n; i++) {
    param.push(judgeFizzBuzz(i))
  }
  return param
}

exports.fizzbuzz = fizzbuzz