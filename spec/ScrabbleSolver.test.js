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

  test('Should return 3 when given b as a parameter', () => {
    scrabbleSolver = new ScrabbleSolver('b')
    
    expect(scrabbleSolver.score()).toEqual(3)
  })

  test('Should return 4 when given f as a parameter', () => {
    scrabbleSolver = new ScrabbleSolver('f')
    
    expect(scrabbleSolver.score()).toEqual(4)
  })

  test('Should return 2 when given aa as a parameter', () => {
    scrabbleSolver = new ScrabbleSolver('aa')
    
    expect(scrabbleSolver.score()).toEqual(2)
  })

  test('Should return 1 when given any one point letter as a parameter', () => {
    scrabbleSolver = new ScrabbleSolver('e')

    expect(scrabbleSolver.score()).toEqual(1)
  })
})