function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        computerSelection = "rock";
        return "rock";
    } else if (computerChoice === 1) {
        computerSelection = "paper";
        return "paper";
    } else {
        computerSelection = "scissors";
        return "scissors";
    }
}

function playRound(player, computer) {
    if (player === computer) {
        return message("draw");
    }
    if (player === "rock") {
        if (computer === "scissors") {
            playerScore++;
            return message("win");
        } else {
            computerScore++;
            return message("lose");
        }
    }
    if (player === "paper") {
        if (computer === "rock") {
            playerScore++;
            return message("win");
        } else {
            computerScore++;
            return message("lose");
        }
    }
    if (player === "scissors") {
        if (computer === "paper") {
            playerScore++;
            return message("win");
        } else {
            computerScore++;
            return message("lose");
        }
    }
}

function message(result) {
    if (result === "win") {
        return `You win! (P: ${playerSelection} vs C: ${computerSelection})`;
    } else if (result === "lose") {
        return `You lose! (P: ${playerSelection} vs C: ${computerSelection})`;
    } else {
        return `It's a draw! (P: ${playerSelection} vs C: ${computerSelection})`;
    }
}

function decideWinner() {
    if (playerScore > computerScore) {
        return `*You win! ${playerScore}:${computerScore}*`;
    } else if (computerScore > playerScore) {
        return `*You lose! ${playerScore}:${computerScore}*`;
    } else {
        return `*It's a draw! ${playerScore}:${computerScore}*`;
    }
}

function game() {
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    rockButton.addEventListener('click', () => {
        playerSelection = 'rock';

        const line3 = document.createElement('p');
        line3.textContent = playRound(playerSelection, computerPlay());
        results.appendChild(line3);

        const line4 = document.createElement('p');
        line4.textContent = decideWinner();
        results.appendChild(line4);
    });
    paperButton.addEventListener('click', () => {
        playerSelection = 'paper';

        const line3 = document.createElement('p');
        line3.textContent = playRound(playerSelection, computerPlay());
        results.appendChild(line3);

        const line4 = document.createElement('p');
        line4.textContent = decideWinner();
        results.appendChild(line4);
    });
    scissorsButton.addEventListener('click', () => {
        playerSelection = 'scissors';

        const line3 = document.createElement('p');
        line3.textContent = playRound(playerSelection, computerPlay());
        results.appendChild(line3);

        const line4 = document.createElement('p');
        line4.textContent = decideWinner();
        results.appendChild(line4);
    });
}

let playerSelection = "";
let playerScore = 0;

let computerSelection = "";
let computerScore = 0;

game();