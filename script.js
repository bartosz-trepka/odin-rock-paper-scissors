function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        console.log("Rock");
    } else if (computerChoice === 1) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

computerPlay();