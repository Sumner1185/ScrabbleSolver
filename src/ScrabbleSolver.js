class ScrabbleSolver {
  constructor(word) {
    this.word = word
    this.totalScore = 0
  }

  score = () => {
    if (this.parameterIsAString()) {
      let wordArray = this.word.toLowerCase().split('')

      return this.calculateScore(wordArray)
    }
    return 0
  }

  parameterIsAString = () => {
   return typeof this.word === 'string' ? true : false
  }

  calculateScore = (wordArray) => {
    for (let i = 0; i < wordArray.length; i++) {
      if (this.letterIsOnePointer(wordArray[i])) {
        this.totalScore += 1
      } else if (this.letterIsTwoPointer(wordArray[i])) {
        this.totalScore += 2
      } else if (this.letterIsThreePointer(wordArray[i])) {
        this.totalScore += 3
      } else if (this.letterIsFourPointer(wordArray[i])) {
        this.totalScore += 4
      } else if (this.letterIsFivePointer(wordArray[i])) {
        this.totalScore += 5
      } else if (this.letterIsEightPointer(wordArray[i])) {
        this.totalScore += 8
      } else if (this.letterIsTenPointer(wordArray[i])) {
        this.totalScore += 10
      }
    }
    return this.totalScore
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
