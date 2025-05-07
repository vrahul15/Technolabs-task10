// Function to get the user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: Invalid choice. Please choose rock, paper, or scissors.');
    }
  };
  
  // Function to get the computer's choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Function to determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'You used the secret cheat code. You win!';
    }
  
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (userChoice === 'rock') {
      return (computerChoice === 'paper') ? 'Computer wins!' : 'You win!';
    }
  
    if (userChoice === 'paper') {
      return (computerChoice === 'scissors') ? 'Computer wins!' : 'You win!';
    }
  
    if (userChoice === 'scissors') {
      return (computerChoice === 'rock') ? 'Computer wins!' : 'You win!';
    }
  };
  
  // Function to play the game
  const playGame = () => {
    const userChoice = getUserChoice('rock'); // Change this to test other inputs like 'bomb'
    const computerChoice = getComputerChoice();
  
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Start the game
  playGame();
  
