function prepareBoard() {
    updateScore();
    createLog();
    updateDisplay('Start');
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

function updateDisplay(mode) {
    switch (mode) {
        case 'Start':
            smallScreen.innerText = 'First to 5 - Choose one of the buttons below!';
            break;
        case 'Rock':
            smallScreen.innerText = 'Rock breaks Scissors';
            break;
        case 'Paper':
            smallScreen.innerText = 'Paper covers Rock';
            break;
        case 'Scissors':
            smallScreen.innerText = 'Scissors cuts Paper';
            break;
        case 'Same':
            smallScreen.innerText = 'It is a draw';
            break;
        case 'Winner':
            smallScreen.innerText += '. You are the winner!';
            break;
        case 'Loser':
            smallScreen.innerText += '. Computer is the winner!';
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
        updateDisplay('Same');
        updateDraw();
    } else {
        if (playerSelection === 'Rock') {
            if (computerSelection === 'Scissors') {
                updateDisplay('Rock');
                updateWin();
            } else {
                updateDisplay('Paper');
                updateLose();
            }
        }
        if (playerSelection === 'Paper') {
            if (computerSelection === 'Rock') {
                updateDisplay('Paper');
                updateWin();
            } else {
                updateDisplay('Scissors');
                updateLose();
            }
        }
        if (playerSelection === 'Scissors') {
            if (computerSelection === 'Paper') {
                updateDisplay('Scissors');
                updateWin();
            } else {
                updateDisplay('Rock');
                updateLose();
            }
        }
    }
}

function updateWin() {
    playerScore += 1;
    updateScore();
    updateLog();
    updateButtons('Win');
    if (playerScore === 5 || computerScore === 5) {
        disableButtons();
        finishButtons();
        updateDisplay('Winner');
    } else {
        roundCounter += 1;
        createLog();
    }
}

function updateDraw() {
    updateScore();
    updateLog();
    updateButtons('Draw');
    roundCounter += 1;
    createLog();
}

function updateLose() {
    computerScore += 1;
    updateScore();
    updateLog();
    updateButtons('Lose');
    if (playerScore === 5 || computerScore === 5) {
        disableButtons();
        finishButtons();
        updateDisplay('Loser');
    } else {
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
    updateText(tdPlayer, tdComputer);
}

function updateText(playerCell, computerCell) {
    if (playerCell.innerText === 'Rock') {
        if (computerCell.innerText === 'Paper') {
            playerCell.classList = 'lose-text';
            computerCell.classList = 'win-text';
        } else if (computerCell.innerText === 'Scissors') {
            playerCell.classList = 'win-text';
            computerCell.classList = 'lose-text';
        } else {
            playerCell.classList = 'draw-text';
            computerCell.classList = 'draw-text';
        }
    } else if (playerCell.innerText === 'Paper') {
        if (computerCell.innerText === 'Scissors') {
            playerCell.classList = 'lose-text';
            computerCell.classList = 'win-text';
        } else if (computerCell.innerText === 'Rock') {
            playerCell.classList = 'win-text';
            computerCell.classList = 'lose-text';
        } else {
            playerCell.classList = 'draw-text';
            computerCell.classList = 'draw-text';
        }
    } else {
        if (computerCell.innerText === 'Rock') {
            playerCell.classList = 'lose-text';
            computerCell.classList = 'win-text';
        } else if (computerCell.innerText === 'Paper') {
            playerCell.classList = 'win-text';
            computerCell.classList = 'lose-text';
        } else {
            playerCell.classList = 'draw-text';
            computerCell.classList = 'draw-text';
        }
    }
}

function finishButtons() {
    for (let i = 0; i < playerButtons.length; i++) {
        playerButtons[i].classList = '';
    }
    for (let i = 0; i < computerButtons.length; i++) {
        computerButtons[i].classList = '';
    }

    if (playerScore === 5) {
        playerButtons[0].classList = 'win-button';
        playerButtons[1].classList = 'win-button';
        playerButtons[2].classList = 'win-button';
        computerButtons[0].classList = 'lose-button';
        computerButtons[1].classList = 'lose-button';
        computerButtons[2].classList = 'lose-button';
    } else {
        playerButtons[0].classList = 'lose-button';
        playerButtons[1].classList = 'lose-button';
        playerButtons[2].classList = 'lose-button';
        computerButtons[0].classList = 'win-button';
        computerButtons[1].classList = 'win-button';
        computerButtons[2].classList = 'win-button';
    }
}

let playerSelection = "";
let playerScore = 0;

let computerSelection = "";
let computerScore = 0;

let roundCounter = 1;

const smallScreen = document.getElementById('small-screen');
const score = document.getElementById('score');
const tableLog = document.getElementById('table-log');

const tableContainer = document.getElementById('table-container');

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
    tableContainer.scrollTop = tableContainer.scrollHeight;
}
const paper = function() {
    playRound('Paper');
    tableContainer.scrollTop = tableContainer.scrollHeight;
}
const scissors = function() {
    playRound('Scissors');
    tableContainer.scrollTop = tableContainer.scrollHeight;
}

prepareBoard();
game();