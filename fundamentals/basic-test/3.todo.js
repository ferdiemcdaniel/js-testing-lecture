/*

 * Instructions: Improve the testing framework by creating a function
 called `test` which accepts two(2) parameters: title, and callback function.

 Tip: Wrapping a code block try/catch will allow code to proceed even if an error is thrown.

 example: test(title, () => {})
 
 > RUN node 3.todo.js to check if your code correctly caught the bug
 
 */

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