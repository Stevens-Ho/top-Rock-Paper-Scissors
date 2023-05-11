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

function displayResult(resultContent) {
    let result = document.querySelector(".result");
    result.textContent = resultContent;
}

let computerWin = 0;
let userWin = 0;

function displayScore(score) {
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
    if (playerSelection === "rock" && computerSelection === "paper") {
        displayResult("You Lose! Paper beats Rock");
        displayScore("computer");
        winOrLose(computerWin, userWin);
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        displayResult("You Lose! Scissor beats Paper");  
        displayScore("computer");
        winOrLose(computerWin, userWin);
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        displayResult("You Lose! Rock beats Scissor");
        displayScore("computer");
        winOrLose(computerWin, userWin);
    }
    //win
    else if (playerSelection === "paper" && computerSelection === "rock") {
        displayResult("You Win! Paper beats Rock");
        displayScore("user");
        winOrLose(computerWin, userWin);
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        displayResult("You Win! Rock beats Scissor");
        displayScore("user");
        winOrLose(computerWin, userWin);
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        displayResult("You Win! Scissor beats Paper");
        displayScore("user");
        winOrLose(computerWin, userWin);
    }
    //tie
    else if (playerSelection === "scissor" && computerSelection === "scissor") {
        displayResult("It's a tie");
        displayScore();
        winOrLose(computerWin, userWin);
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        displayResult("It's a tie"); 
        displayScore();
        winOrLose(computerWin, userWin);
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        displayResult("It's a tie"); 
        displayScore();
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
