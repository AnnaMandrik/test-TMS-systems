export const getRandomIntInclusive = (firstNumber, secondNumber) => {
    firstNumber = Math.ceil(firstNumber);
    secondNumber = Math.floor(secondNumber);
    if (firstNumber >= 0 && secondNumber >= 0) {         
      return Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
    } else if (secondNumber <= firstNumber) {     
      return Math.floor(Math.random() * (firstNumber - secondNumber + 1)) + secondNumber;
    }
  }