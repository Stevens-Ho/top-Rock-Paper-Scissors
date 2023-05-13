const result = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const gameWinner = document.querySelector(".gameWinner");
const playAgain = document.querySelector(".playAgain");
const centerBox = document.querySelector(".centerBox");
const playerSelection = document.querySelectorAll(".playerSelection");
playAgain.addEventListener("click", () => location.reload());
let computerWin = 0;
let playerWin = 0;

playerSelection.forEach(button => { 
    button.addEventListener('click', getSelected) 
});

function getSelected(e) {
    let playerChoice = e.target.id;
    playRound(playerChoice, getComputerChoice());
    finishGame();
}

function getComputerChoice() {
    const number = Math.floor(Math.random()*3);
    if (number === 0) return "rock";
    else if (number === 1) return "paper";
    else if (number === 2) return "scissor";
}

function playRound(playerSelection, computerSelection) {
    //lose
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
        ) {
        result.textContent = "You Lose! Paper beats Rock";
        computerWin++;
        updateScore();
    }
    //win
    else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper")
     ) {
        result.textContent = "You Win! Paper beats Rock";
        playerWin++;
        updateScore();
    }
    //tie
    else if (playerSelection === computerSelection)  {
        result.textContent = "It's a tie";
        updateScore();
    }
}

function updateScore() {
    computerScore.textContent = `Computer Score: ${computerWin}`;
    playerScore.textContent = `Player Score: ${playerWin}`;
}

function finishGame() {
    if (computerWin === 5 || playerWin=== 5) {
        finishGameText();
        showHiddenElement();
        stopButtonSelection();
    }
}

function finishGameText() {
    if (playerWin === 5) {
        gameWinner.textContent = "Congratulation, you win the game!!!";
    } else {
        gameWinner.textContent = "Unfortunately, you lose the game!!!";
    }
}

function stopButtonSelection() {
    playerSelection.forEach(select => {
        select.removeEventListener("click", getSelected)
    })
}

function showHiddenElement() {
    centerBox.removeAttribute("hidden");
    
}