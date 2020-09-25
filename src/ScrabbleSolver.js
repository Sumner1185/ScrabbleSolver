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
      } else if (this.letterIsTwoPointer(wordArray[i])) {
        totalScore += 2
      } else if (wordArray[i] === 'b' || wordArray[i] === 'c' || wordArray[i] === 'm' || wordArray[i] === 'p') {
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

  letterIsTwoPointer = (letter) => {
    let twoPointers = ['d', 'g']

    return twoPointers.includes(letter)
  }
}

module.exports = ScrabbleSolver
