const {sum, subtract} = require('./math')

test('sum adds numbers', () => {
  const result = sum(22, 21)
  const expected = 41
  expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
  const result = subtract(99, 58)
  const expected = 41
  expect(result).toBe(expected)
})