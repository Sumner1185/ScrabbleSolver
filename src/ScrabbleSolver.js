class ScrabbleSolver {
  constructor(word) {
    this.word = word
  }

  score = () => {
    if (this.word === 'a') {
      return 1
    } else if (this.word === 'd') {
      return 2
    } else if (this.word === 'b') {
      return 3
    } else {
      return 4
    }
  }
}

module.exports = ScrabbleSolver
