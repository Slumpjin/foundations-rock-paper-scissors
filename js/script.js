let playerScore = computerScore = 0;
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');
const resultDiv = document.querySelector('.result');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', (e) => {
    const playerSelection = e.target.value;
    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === 1) {
        playerScore++;
        playerScoreDiv.innerText = `Player score: ${playerScore}`;
        resultDiv.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (roundResult === -1) {
        computerScore++;
        computerScoreDiv.innerText = `Computer score: ${computerScore}`;
        resultDiv.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (roundResult === 0) {
        resultDiv.innerText = `Tie! ${playerSelection} equals ${computerSelection}`;
    }
    if (playerScore >= 5 || computerScore >= 5) {
        resultDiv.innerText = playerScore === 5 ? 'You win the game!' : 'Computer wins the game!';
        buttons.forEach(button => button.disabled = true);
    }
}));

function getComputerChoice() {
    const randomHandSign = Math.ceil(Math.random() * 3);
    switch (randomHandSign) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const userSelection = playerSelection;
    if (userSelection === computerSelection) {
        return 0;
    }
    if ((userSelection === 'Rock' && computerSelection === 'Paper') ||
        (userSelection === 'Paper' && computerSelection === 'Scissors') ||
        (userSelection === 'Scissors' && computerSelection === 'Rock')) {
        return -1;
    }
    return 1;
}