ScrabbleSolver = require('../src/ScrabbleSolver.js')

describe('ScrabbleSolver', () => {

  test('Should return 1 when given a as a parameter', () => {
    scrabbleSolver = new ScrabbleSolver('a')

    expect(scrabbleSolver.score()).toEqual(1)
  })

  test('Should return 2 when given d as a parameter', () => {
    scrabbleSolver = new ScrabbleSolver('d')
    
    expect(scrabbleSolver.score()).toEqual(2)
  })
})