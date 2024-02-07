function getComputerChoice() {
    // generate a random number between 1-3 inclusive
    const randomHandSign = Math.ceil(Math.random() * 3);
    // switch through cases and return a string
    switch (randomHandSign) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function getUserChoice() {
    let userChoice;
    do {
        userChoice = prompt('Rock. Paper. Scissors. Shoot!');
    } while (!validUserChoice(userChoice));
    return userChoice;
}

function validUserChoice(userChoice) {
    const choice = userChoice.toLowerCase();
    return choice === 'rock' || choice === 'paper' || choice === 'scissors';
}

function playRound(playerSelection, computerSelection) {
    // make player selection case insensitive
    const userSelection = playerSelection.toLowerCase();
    // check for a tie
    if (userSelection === computerSelection) {
        console.log(`Tie! ${userSelection} equals ${computerSelection}`);
        return 0;
    }
    // check for cases where computer beats player
    if ((userSelection === 'rock' && computerSelection === 'paper') ||
        (userSelection === 'paper' && computerSelection === 'scissors') ||
        (userSelection === 'scissors' && computerSelection === 'rock')) {
        console.log(`You Lose! ${computerSelection} beats ${userSelection}`);
        return -1;
    }
    // else return a win for the player
    console.log(`You Win! ${userSelection} beats ${computerSelection}`);
    return 1;
}

function playGame() {
    // create counter variables for the current game iteration and scores
    const MAX_GAMES = 5;
    let currentGame = 1;
    let playerScore = computerScore = 0;
    // for each round, prompt the user and display round results
    while (currentGame <= MAX_GAMES) {
        console.log(`Round ${currentGame}...`)
        let roundResult = playRound(getUserChoice(), getComputerChoice());
        if (roundResult === 1) {
            playerScore++;
        }
        else if (roundResult === -1) {
            computerScore++;
        }
        currentGame++;
    }
    // show the final score
    console.log(`Final Score... Player: ${playerScore} Computer: ${computerScore}`);
}

playGame();