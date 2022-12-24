let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// TODO: 
// - add check to prevent user input below 0 or above 9
// - refactor: make function that returns the abs values and then 
// integrate into the if statement
// - maybe end the game, disable input and declare game winner after so many rounds

const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (userGuess, compGuess, target) => {
  if (Math.abs(target - userGuess) === Math.abs(target - compGuess)) {
    return true;
  } else if (Math.abs(target - userGuess) < Math.abs(target - compGuess)) {
    return true;  
  }
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