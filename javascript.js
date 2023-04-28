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
        computerWin++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("You Lose! Scissor beats Paper");  
        computerWin++;
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissor");
        computerWin++;
    }
    //win
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock");
        userWin++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("You Win! Rock beats Scissor");
        userWin++;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You Win! Scissor beats Paper");
        userWin++;
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
