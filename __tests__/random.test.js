const checkIfEqual = require('../lib/random.js')

test('gets a random number between 1 and 10', () => {
    expect(randomNumber()).tobeGreaterThanOrEqual(1);
    expect(randomNumber()).tobeGreaterThanOrEqual(10);
})