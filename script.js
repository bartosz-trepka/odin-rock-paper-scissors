function prepareBoard() {
    updateScore();
    createLog();
    setSmallScreen('Start');
}

function updateScore() {
    score.innerText = `Score: ${playerScore}:${computerScore}`;
}

function createLog() {
    const tr = document.createElement('tr');
    const tdRound = document.createElement('td');
    const tdPlayer = document.createElement('td');
    const tdComputer = document.createElement('td');

    tdRound.innerText = roundCounter;
    tdPlayer.innerText = '.';
    tdComputer.innerText = '.';

    tr.appendChild(tdRound);
    tr.appendChild(tdPlayer);
    tr.appendChild(tdComputer);
    tableLog.appendChild(tr);
}

function setSmallScreen(mode) {
    switch (mode) {
        case 'Start':
            smallScreen.innerText = 'Choose your weapon!';
            break;
        case 'Draw':
            smallScreen.innerText += ' [draw]';
            break;
        case 'Win':
            smallScreen.innerText += ' [win]';
            break;
        case 'Lose':
            smallScreen.innerText += ' [lose]';
            break;
        default:
            smallScreen.innerText = '...';
    }
}

function game() {
    playerRock.addEventListener('click', rock);
    playerPaper.addEventListener('click', paper);
    playerScissors.addEventListener('click', scissors);
}

function playRound(choice) {
    playerSelection = choice;
    computerSelection = computerPlay();

    decideResult();
}

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return 'Rock';
    } else if (computerChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function decideResult() {
    if (playerSelection === computerSelection) {
        updateDraw();
    } else {
        if (playerSelection === 'Rock') {
            if (computerSelection === 'Scissors') {
                updateWin();
            } else {
                updateLose();
            }
        }
        if (playerSelection === 'Paper') {
            if (computerSelection === 'Rock') {
                updateWin();
            } else {
                updateLose();
            }
        }
        if (playerSelection === 'Scissors') {
            if (computerSelection === 'Paper') {
                updateWin();
            } else {
                updateLose();
            }
        }
    }
}

function updateWin() {
    playerScore += 1;
    updateScore();
    updateLog();
    updateDisplay();
    if (playerScore === 5 || computerScore === 5) {
        disableButtons();
    } else {
        setSmallScreen('Win');
        roundCounter += 1;
        createLog();
    }
}

function updateDraw() {
    updateScore();
    updateLog();
    updateDisplay();
    setSmallScreen('Draw');
    roundCounter += 1;
    createLog();
}

function updateLose() {
    computerScore += 1;
    updateScore();
    updateLog();
    updateDisplay();
    if (playerScore === 5 || computerScore === 5) {
        disableButtons();
    } else {
        setSmallScreen('Lose');
        roundCounter += 1;
        createLog();
    }
}

function disableButtons() {
    playerRock.removeEventListener('click', rock);
    playerPaper.removeEventListener('click', paper);
    playerScissors.removeEventListener('click', scissors);
}

function updateLog() {
    const tdPlayer = tableLog.lastElementChild.cells[1];
    const tdComputer = tableLog.lastElementChild.cells[2];

    tdPlayer.innerText = playerSelection;
    tdComputer.innerText = computerSelection;
}

function updateDisplay() {
    smallScreen.innerText = `${playerSelection} : ${computerSelection}`;
}

let playerSelection = "";
let playerScore = 0;

let computerSelection = "";
let computerScore = 0;

let roundCounter = 1;

const smallScreen = document.getElementById('small-screen');
const score = document.getElementById('score');
const tableLog = document.getElementById('table-log');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');

const rock = function() {
    playRound('Rock');
}
const paper = function() {
    playRound('Paper');
}
const scissors = function() {
    playRound('Scissors');
}

// const computerRock = document.getElementById('computer-rock');
// const computerPaper = document.getElementById('computer-paper');
// const computerScissors = document.getElementById('computer-scissors');

prepareBoard();
game();