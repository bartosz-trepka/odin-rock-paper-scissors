function prepareBoard() {
    updateScore();
    createLog();
    setSmallScreen('Start');
    setButtons();
}

function updateScore() {
    score.innerText = `Score - ${playerScore}:${computerScore}`;
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
            smallScreen.innerText = 'Choose one of the buttons below!';
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

function setButtons() {
    for (let i = 0; i < computerButtons.length; i++) {
        computerButtons[i].classList = "disable";
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
    updateButtons('Win');
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
    updateButtons('Draw');
    setSmallScreen('Draw');
    roundCounter += 1;
    createLog();
}

function updateLose() {
    computerScore += 1;
    updateScore();
    updateLog();
    updateDisplay();
    updateButtons('Lose');
    if (playerScore === 5 || computerScore === 5) {
        disableButtons();
    } else {
        setSmallScreen('Lose');
        roundCounter += 1;
        createLog();
    }
}

function updateButtons(result) {
    for (let i = 0; i < playerButtons.length; i++) {
        playerButtons[i].classList = '';
    }
    for (let i = 0; i < computerButtons.length; i++) {
        computerButtons[i].classList = 'disable';
    }

    if (result === 'Win') {
        if (playerSelection === 'Rock') {
            playerButtons[0].classList = 'win-button';
            computerButtons[2].classList = 'lose-button';
        } else if (playerSelection === 'Paper') {
            playerButtons[1].classList = 'win-button';
            computerButtons[0].classList = 'lose-button';
        } else {
            playerButtons[2].classList = 'win-button';
            computerButtons[1].classList = 'lose-button';
        }
    } else if (result === 'Lose') {
        if (playerSelection === 'Rock') {
            playerButtons[0].classList = 'lose-button';
            computerButtons[1].classList = 'win-button';
        } else if (playerSelection === 'Paper') {
            playerButtons[1].classList = 'lose-button';
            computerButtons[2].classList = 'win-button';
        } else {
            playerButtons[2].classList = 'lose-button';
            computerButtons[0].classList = 'win-button';
        }
    } else {
        if (playerSelection === 'Rock') {
            playerButtons[0].classList = 'draw-button';
            computerButtons[0].classList = 'draw-button';
        } else if (playerSelection === 'Paper') {
            playerButtons[1].classList = 'draw-button';
            computerButtons[1].classList = 'draw-button';
        } else {
            playerButtons[2].classList = 'draw-button';
            computerButtons[2].classList = 'draw-button';
        }
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

const playerButtons = document.getElementById('player-buttons').getElementsByTagName('button');
const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');

const computerButtons = document.getElementById('computer-buttons').getElementsByTagName('button');
const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');

const rock = function() {
    playRound('Rock');
}
const paper = function() {
    playRound('Paper');
}
const scissors = function() {
    playRound('Scissors');
}

prepareBoard();
game();