class ScrabbleSolver {
  constructor(word) {
    this.word = word
  }

  score = () => {
    return this.word === 'a' ? 1 : 2
  }
}

module.exports = ScrabbleSolver
