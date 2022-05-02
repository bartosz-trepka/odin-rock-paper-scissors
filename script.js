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
            return message("win");
        } else {
            return message("lose");
        }
    }
    if (player === "paper") {
        if (computer === "rock") {
            return message("win");
        } else {
            return message("lose");
        }
    }
    if (player === "scissors") {
        if (computer === "paper") {
            return message("win");
        } else {
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

const playerSelection = "Rock".toLowerCase();
const computerSelection = computerPlay().toLowerCase();

console.log(playRound(playerSelection, computerSelection));