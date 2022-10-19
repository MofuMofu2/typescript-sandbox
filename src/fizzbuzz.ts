const fizz = (n: number) => {
  return n % 3 === 0
}

const buzz = (n: number) => {
  return n % 5 === 0
}

const judgeFizzBuzz = (n: number) => {
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

export const fizzbuzz = (n: number) => {
  const param: string[]  = []
  for (let i = 1; i <= n; i++) {
    param.push(judgeFizzBuzz(i))
  }
  return param
}
