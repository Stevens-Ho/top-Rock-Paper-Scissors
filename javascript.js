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
function playRound(playerSelection, computerSelection) {
    //lose
    if (playerSelection === "rock" && computerSelection === "paper") {
        document.create
        displayResult("You Lose! Paper beats Rock");
        computerWin++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        displayResult("You Lose! Scissor beats Paper");  
        computerWin++;
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        displayResult("You Lose! Rock beats Scissor");
        computerWin++;
    }
    //win
    else if (playerSelection === "paper" && computerSelection === "rock") {
        displayResult("You Win! Paper beats Rock");
        userWin++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        displayResult("You Win! Rock beats Scissor");
        userWin++;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        displayResult("You Win! Scissor beats Paper");
        userWin++;
    }
    //tie
    else if (playerSelection === "scissor" && computerSelection === "scissor") {
        displayResult("It's a tie");
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        displayResult("It's a tie"); 
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        displayResult("It's a tie"); 
    }
}

function winOrLose(timesOfComputerWin, timesOfUserWin){
    if (timesOfComputerWin > timesOfUserWin) {
        console.log("Unfortunately, you lose the game!!!");
    }
    else if (timesOfUserWin > timesOfComputerWin) {
        console.log("Congratulation, you win the game!!!");
    }
    else if (timesOfUserWin === timesOfComputerWin) {
        console.log("This game is tie, please play again to win the game!!!");
    }
}

const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissor");
const paper = document.querySelector(".paper");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissor.addEventListener("click", () => playRound("scissor", getComputerChoice()));

winOrLose(computerWin, userWin);