
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

    // check for a tie

    // check for cases where computer beats player

    // else return a win for the player
}

function playGame() {
    // create counter variables for the current game iteration and scores

    // for each round, prompt the user and display round results

    // show the final score
}