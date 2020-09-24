class ScrabbleSolver {
  constructor(word) {
    this.word = word
  }

  score = () => {
    let wordArray = this.word.split('')
    let totalScore = 0
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === 'a') {
        totalScore += 1
      } else if (wordArray[i] === 'd') {
        totalScore += 2
      } else if (wordArray[i] === 'b') {
        totalScore += 3
      } else {
        totalScore += 4
      }
    }
    return totalScore
  }
}

module.exports = ScrabbleSolver
