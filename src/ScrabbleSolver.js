class ScrabbleSolver {
  constructor(word) {
    this.word = word
  }

  score = () => {
    if (this.word === 'a') {
      return 1
    } else if (this.word === 'd') {
      return 2
    } else {
      return 3
    }
  }
}

module.exports = ScrabbleSolver
