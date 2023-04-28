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
function playRound(playerSelection, computerSelection) {
    //lose
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("You Lose! Scissor beats Paper");  
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissor");
    }
    //win
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("You Win! Rock beats Scissor");
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You Win! Scissor beats Paper");
    }
    //tie
    else if (playerSelection === "scissor" && computerSelection === "scissor") {
        console.log("It's a tie");
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("It's a tie"); 
    }
    else if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("It's a tie"); 
    }
}