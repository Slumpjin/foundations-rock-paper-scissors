
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

function playRound(playerSelection, computerSelection) {
    // make player selection case insensitive
    const userSelection = playerSelection.toLowerCase();
    // check for a tie
    if (userSelection === computerSelection) {
        return `Tie! ${userSelection} equals ${computerSelection}`;
    }
    // check for cases where computer beats player
    if ((userSelection === 'rock' && computerSelection === 'paper') ||
        (userSelection === 'paper' && computerSelection === 'scissors') ||
        (userSelection === 'scissors' && computerSelection === 'rock')) {
        return `You Lose! ${computerSelection} beats ${userSelection}`;
    }
    // else return a win for the player
    return `You Win! ${userSelection} beats ${computerSelection}`;
}

function playGame() {
    // create counter variables for the current game iteration and scores

    // for each round, prompt the user and display round results

    // show the final score
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));