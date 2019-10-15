let result, expected

// function sum is broken intentionally so it will fire an error.
const sum = (a, b) => a - b
const subtract = (a, b) => a - b

result = sum(21, 20)
expected = 41
if (result !== expected) {
  throw new Error(`Fail. Expecting ${expected}. Got ${result}.`)
}

result = subtract(99, 58)
expected = 41
if (result !== expected) {
  throw new Error(`Fail. Expecting ${expected}. Got ${result}.`)
}