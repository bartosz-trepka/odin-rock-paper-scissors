function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
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
    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            alert(`Press F12 to check results!`)
            console.log(
                `*Welcome to Rock-Paper-Scissors game!*`
            );
        }

        do {
            playerSelection = prompt(`Round ${i + 1}/5:`).toLowerCase();
        } while (
            playerSelection !== "rock" && 
            playerSelection !== "paper" && 
            playerSelection !== "scissors"
        );

        computerSelection = computerPlay().toLowerCase();
        
        console.log(`Round: ${i + 1}:`);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(decideWinner());
}

let playerSelection = "";
let playerScore = 0;

let computerSelection = "";
let computerScore = 0;

game();