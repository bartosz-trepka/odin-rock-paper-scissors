function prepareBoard() {
    updateScore();
    setSmallScreen('Start');
}

function updateScore() {
    score.innerText = `Score: ${playerScore}:${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        playerRock.removeEventListener('click', rock);
        playerPaper.removeEventListener('click', paper);
        playerScissors.removeEventListener('click', scissors);
    }
}

function setSmallScreen(mode) {
    switch (mode) {
        case 'Start':
            smallScreen.innerText = '...';
            break;
        case 'Draw':
            smallScreen.innerText += ' draw';
            break;
        case 'Win':
            smallScreen.innerText += ' win';
            break;
        case 'Lose':
            smallScreen.innerText += ' lose';
            break;
        default:
            smallScreen.innerText = '...';
    }
}

function createRow() {
    const tr = document.createElement('tr');
    const tdRound = document.createElement('td');
    const tdPlayer = document.createElement('td');
    const tdComputer = document.createElement('td');

    tdRound.innerText = roundCounter;
    tdPlayer.innerText = playerSelection;
    tdComputer.innerText = computerSelection;

    tr.appendChild(tdRound);
    tr.appendChild(tdPlayer);
    tr.appendChild(tdComputer);
    tableLog.appendChild(tr);
}

function game() {
    playerRock.addEventListener('click', rock);
    playerPaper.addEventListener('click', paper);
    playerScissors.addEventListener('click', scissors);
}

function playRound(choice) {
    playerSelection = choice;
    computerSelection = computerPlay();

    smallScreen.innerText = `${playerSelection} : ${computerSelection}`;

    decideResult();

    roundCounter += 1;
}

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function decideResult() {
    if (playerSelection === computerSelection) {
        createRow();
        return setSmallScreen('Draw');
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            playerScore++;
            updateScore();
            createRow();
            return setSmallScreen('Win');
        } else {
            computerScore++;
            updateScore();
            createRow();
            return setSmallScreen('Lose');
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore += 1;
            updateScore();
            createRow();
            return setSmallScreen('Win');
        } else {
            computerScore += 1;
            updateScore();
            createRow();
            return setSmallScreen('Lose');
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerScore += 1;
            updateScore();
            createRow();
            return setSmallScreen('Win');
        } else {
            computerScore += 1;
            updateScore();
            createRow();
            return setSmallScreen('Lose');
        }
    }
}

let playerSelection = "";
let playerScore = 0;

let computerSelection = "";
let computerScore = 0;

let roundCounter = 0;

const smallScreen = document.getElementById('small-screen');
const score = document.getElementById('score');
const tableLog = document.getElementById('table-log');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');

const rock = function() {
    playerSelection = 'Rock';
    playRound('Rock');
}
const paper = function() {
    playerSelection = 'Paper';
    playRound('Paper');
}
const scissors = function() {
    playerSelection = 'Scissors';
    playRound('Scissors');
}

// const computerRock = document.getElementById('computer-rock');
// const computerPaper = document.getElementById('computer-paper');
// const computerScissors = document.getElementById('computer-scissors');

prepareBoard();
game();