class ScrabbleSolver {
  constructor(word) {
    this.word = word
  }

  score = () => {
    let wordArray = this.word.split('')
    let totalScore = 0
    for (let i = 0; i < wordArray.length; i++) {
      if (this.letterIsOnePointer(wordArray[i])) {
        totalScore += 1
      } else if (wordArray[i] === 'd' || wordArray[i] === 'g') {
        totalScore += 2
      } else if (wordArray[i] === 'b') {
        totalScore += 3
      } else {
        totalScore += 4
      }
    }
    return totalScore
  }

  letterIsOnePointer = (letter) => {
    let onePointers = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']

    return onePointers.includes(letter)
  }
}

module.exports = ScrabbleSolver
