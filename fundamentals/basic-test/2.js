const {sum, subtract} = require('./math')

let result, expected

result = sum(21, 20)
expected = 41 
expect(result).toBe(expected)

result = subtract(99, 58)
expected = 41
expect(result).toBe(expected)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Fail. Expecting ${expected}. Got ${result}.`)
      }
    },
  }
}
