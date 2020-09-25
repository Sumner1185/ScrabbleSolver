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
      } else if (this.letterIsThreePointer(wordArray[i])) {
        totalScore += 3
      } else if (this.letterIsFourPointer(wordArray[i])) {
        totalScore += 4
      } else if (this.letterIsFivePointer(wordArray[i])) {
        totalScore += 5
      } else if (this.letterIsEightPointer(wordArray[i])) {
        totalScore += 8
      } else if (this.letterIsTenPointer(wordArray[i])) {
        totalScore += 10
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

  letterIsThreePointer = (letter) => {
    let threePointers = ['b', 'c', 'm', 'p']

    return threePointers.includes(letter)
  }

  letterIsFourPointer = (letter) => {
    let fourPointers = ['f', 'h', 'v', 'w', 'y']

    return fourPointers.includes(letter)
  }

  letterIsFivePointer = letter => letter === 'k'

  letterIsEightPointer = (letter) => {
    let eightPointers = ['j', 'x']

    return eightPointers.includes(letter)
  }
  
  letterIsTenPointer = (letter) => {
    let tenPointers = ['q', 'z']

    return tenPointers.includes(letter)
  }
}

module.exports = ScrabbleSolver
