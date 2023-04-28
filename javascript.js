function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    if (number === 0) {
        return "rock";
    }
    else if (number === 1) {
        return "paper";
    }
    else if (number === 2) {
        return "scissor";
    }
}

let computerWin = 0;
let userWin = 0;
