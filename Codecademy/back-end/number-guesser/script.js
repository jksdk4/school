let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (userGuess, compGuess, target) => {
  if (Math.abs(target - userGuess) === Math.abs(target - compGuess)) {
    console.log('Tied. User wins.');
    return true;
  } else if (Math.abs(target - userGuess) < Math.abs(target - compGuess)) {
    console.log('User wins.');
    return true;  
  }
  console.log('Computer wins.');
  return false;
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;