/*

 * Instructions: Continue to refactor the previous challenge.
 Create plain JavaScript function called `expect` accepts one(1) parameter
 and returns an object of assertions.

 example: expect(actual).toBe(expected)
 
 > RUN node 2.todo.js to check if your code correctly caught the bug
 
 */

const {sum, subtract} = require('./math')

let result, expected

result = sum(21, 20)
expected = 41 
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(99, 58)
expected = 4
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}
