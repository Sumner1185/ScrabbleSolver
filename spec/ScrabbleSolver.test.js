ScrabbleSolver = require('../src/ScrabbleSolver.js')

describe('ScrabbleSolver', () => {

  test('Should return 1 when given a as a parameter', () => {
    scrabble = new ScrabbleSolver('a')

    expect(scrabble.score()).toEqual(1)
  })

  test('Should return 2 when given d as a parameter', () => {
    scrabble = new ScrabbleSolver('d')
    
    expect(scrabble.score()).toEqual(2)
  })

  test('Should return 3 when given b as a parameter', () => {
    scrabble = new ScrabbleSolver('b')
    
    expect(scrabble.score()).toEqual(3)
  })

  test('Should return 4 when given f as a parameter', () => {
    scrabble = new ScrabbleSolver('f')
    
    expect(scrabble.score()).toEqual(4)
  })

  test('Should return 5 when given k as a parameter', () => {
    scrabble = new ScrabbleSolver('k')
    
    expect(scrabble.score()).toEqual(5)
  })

  test('Should return 8 when given j as a parameter', () => {
    scrabble = new ScrabbleSolver('j')
    
    expect(scrabble.score()).toEqual(8)
  })

  test('Should return 10 when given q as a parameter', () => {
    scrabble = new ScrabbleSolver('q')
    
    expect(scrabble.score()).toEqual(10)
  })

  test('Should return 2 when given aa as a parameter', () => {
    scrabble = new ScrabbleSolver('aa')
    
    expect(scrabble.score()).toEqual(2)
  })

  test('Should return 1 when given any one point letters as a parameter', () => {
    scrabbleTest1 = new ScrabbleSolver('e')
    scrabbleTest2 = new ScrabbleSolver('i')
    scrabbleTest3 = new ScrabbleSolver('o')

    expect(scrabbleTest1.score()).toEqual(1)
    expect(scrabbleTest2.score()).toEqual(1)
    expect(scrabbleTest3.score()).toEqual(1)
  })

  test('Should return 2 when given either two point letters as a parameter', () => {
    scrabble = new ScrabbleSolver('g')

    expect(scrabble.score()).toEqual(2)
  })

  test('Should return 3 when given all three point letters as a parameter', () => {
    scrabbleTest1 = new ScrabbleSolver('c')
    scrabbleTest2 = new ScrabbleSolver('m')
    scrabbleTest3 = new ScrabbleSolver('p')

    expect(scrabbleTest1.score()).toEqual(3)
    expect(scrabbleTest2.score()).toEqual(3)
    expect(scrabbleTest3.score()).toEqual(3)
  })

  test('Should return 4 when given all four point letters as a parameter', () => {
    scrabbleTest1 = new ScrabbleSolver('h')
    scrabbleTest2 = new ScrabbleSolver('v')
    scrabbleTest3 = new ScrabbleSolver('w')
    scrabbleTest4 = new ScrabbleSolver('y')

    expect(scrabbleTest1.score()).toEqual(4)
    expect(scrabbleTest2.score()).toEqual(4)
    expect(scrabbleTest3.score()).toEqual(4)
    expect(scrabbleTest4.score()).toEqual(4)
  })

  test('Should return 8 when given either eight point letters as a parameter', () => {
    scrabble = new ScrabbleSolver('x')

    expect(scrabble.score()).toEqual(8)
  })

  test('Should return 10 when given either ten point letters as a parameter', () => {
    scrabble = new ScrabbleSolver('z')

    expect(scrabble.score()).toEqual(10)
  })

  test('Should return correct score for any lower case word', () => {
    scrabbleTest1 = new ScrabbleSolver('street')
    scrabbleTest2 = new ScrabbleSolver('quirky')

    expect(scrabbleTest1.score()).toEqual(6)
    expect(scrabbleTest2.score()).toEqual(22)
  })

  test('Should return 0 if given an empty string', () => {
    scrabble = new ScrabbleSolver('')

    expect(scrabble.score()).toEqual(0)
  })

  test('Should return 0 if given anything other than a word string as a parameter', () => {
    scrabbleTest1 = new ScrabbleSolver(" \t\n")
    scrabbleTest2 = new ScrabbleSolver(true)
    scrabbleTest3 = new ScrabbleSolver(null)
    scrabbleTest4 = new ScrabbleSolver({'test': 1})
    scrabbleTest5 = new ScrabbleSolver(123)

    expect(scrabbleTest1.score()).toEqual(0)
    expect(scrabbleTest2.score()).toEqual(0)
    expect(scrabbleTest3.score()).toEqual(0)
    expect(scrabbleTest4.score()).toEqual(0)
    expect(scrabbleTest5.score()).toEqual(0)
  })

  test('Should calculate points even if word has capitals', () => {
    scrabble = new ScrabbleSolver('OXYPHENBUTAZONE')

    expect(scrabble.score()).toEqual(41)
  })
})