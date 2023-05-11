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

let result = document.querySelector(".result");

let computerWin = 0;
let userWin = 0;

function addScore(score) {
    let playerScore = document.querySelector(".playerScore");
    let computerScore = document.querySelector(".computerScore");
    if (score === "computer") {
        computerWin++;
    } else if (score === "user") {
        userWin++;  
    }
    computerScore.textContent = computerWin;
    playerScore.textContent = userWin;
}

function playRound(playerSelection, computerSelection) {
    //lose
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
        ) {
        result.textContent = "You Lose! Paper beats Rock";
        addScore("computer");
        winOrLose(computerWin, userWin);
    }
    //win
    else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper")
     ) {
        result.textContent = "You Win! Paper beats Rock";
        addScore("user");
        winOrLose(computerWin, userWin);
    }
    //tie
    else if (
        (playerSelection === "scissor" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "rock")
        ) {
        result.textContent = "It's a tie";
        addScore();
        winOrLose(computerWin, userWin);
    }
}

//Will announce the winner after one player get 5 score.
let gameWinner = document.querySelector(".gameWinner")
function winOrLose(timesOfComputerWin, timesOfUserWin){
    if (timesOfComputerWin >= 5 || timesOfUserWin >= 5) {
        stopGames();
        showPlayAgainButton();
        if (timesOfComputerWin > timesOfUserWin) {
            gameWinner.textContent = "Unfortunately, you lose the game!!!";
        }
        else if (timesOfUserWin > timesOfComputerWin) {
            gameWinner.textContent = "Congratulation, you win the game!!!";
        }
        else if (timesOfUserWin === timesOfComputerWin) {
            gameWinner.textContent = "This game is tie, please play again to win the game!!!";
        }
    }
}

const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissor");
const paper = document.querySelector(".paper");

function addRockButtonFunction() {
    playRound("rock", getComputerChoice());
}
function addPaperButtonFunction() {
    playRound("paper", getComputerChoice());
}
function addScissorButtonFunction() {
    playRound("scissor", getComputerChoice());
}

rock.addEventListener("click", addRockButtonFunction);
paper.addEventListener("click", addPaperButtonFunction);
scissor.addEventListener("click", addScissorButtonFunction);

function stopGames() {
    rock.removeEventListener("click", addRockButtonFunction);
    paper.removeEventListener("click", addPaperButtonFunction);
    scissor.removeEventListener("click", addScissorButtonFunction);
}

const replay = document.querySelector(".playAgain");
replay.addEventListener("click", () => location.reload());
function showPlayAgainButton() {
    replay.removeAttribute("hidden");
}
winOrLose(computerWin, userWin);
