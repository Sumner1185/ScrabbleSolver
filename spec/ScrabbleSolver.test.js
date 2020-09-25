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

  test('Should return 5 when given k as a parameter', () => {
    scrabbleSolver = new ScrabbleSolver('k')
    
    expect(scrabbleSolver.score()).toEqual(5)
  })

  test('Should return 2 when given aa as a parameter', () => {
    scrabbleSolver = new ScrabbleSolver('aa')
    
    expect(scrabbleSolver.score()).toEqual(2)
  })

  test('Should return 1 when given any one point letters as a parameter', () => {
    scrabbleSolverTest1 = new ScrabbleSolver('e')
    scrabbleSolverTest2 = new ScrabbleSolver('i')
    scrabbleSolverTest3 = new ScrabbleSolver('o')

    expect(scrabbleSolverTest1.score()).toEqual(1)
    expect(scrabbleSolverTest2.score()).toEqual(1)
    expect(scrabbleSolverTest3.score()).toEqual(1)
  })

  test('Should return 2 when given either two point letters as a parameter', () => {
    scrabbleSolver = new ScrabbleSolver('g')

    expect(scrabbleSolver.score()).toEqual(2)
  })

  test('Should return 3 when given all three point letters as a parameter', () => {
    scrabbleSolverTest1 = new ScrabbleSolver('c')
    scrabbleSolverTest2 = new ScrabbleSolver('m')
    scrabbleSolverTest3 = new ScrabbleSolver('p')

    expect(scrabbleSolverTest1.score()).toEqual(3)
    expect(scrabbleSolverTest2.score()).toEqual(3)
    expect(scrabbleSolverTest3.score()).toEqual(3)
  })
})