ScrabbleSolver = require('../src/ScrabbleSolver.js')

describe('ScrabbleSolver', () => {

  test('Should return 1 when given a as a word', () => {
    scrabbleSolver = new ScrabbleSolver('a')
    
    expect(scrabbleSolver.score()).toEqual(1)
  })
})