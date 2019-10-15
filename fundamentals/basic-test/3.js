const {sum, subtract} = require('./math')

test('sum adds numbers', () => {
    const result = sum(21, 20)
    const expected = 41 
    expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
    const result = subtract(99, 58)
    const expected = 41
    expect(result).toBe(expected)
})

function test(title, callback){
    try {
        callback()
        console.log(`✓ ${title}`)
    } catch (error) {
        console.error(`✕ ${title}`)
        console.error(error) 
    }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Fail. Expecting ${expected}. Got ${actual}.`)
      }
    },
  }
}