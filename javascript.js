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

let playerChoice = "rockpaperscissor";
function getSelected(e) {
    playerChoice = e.target.id;
    playRound(playerChoice, getComputerChoice());
    addSelectionImage("player", playerChoice);
    finishGame();
}

function getComputerChoice() {
    const number = Math.floor(Math.random()*3);
    if (number === 0) {
        addSelectionImage("computer", "rock");
        return "rock";
    }
    
    else if (number === 1) {
        addSelectionImage("computer", "paper");
        return "paper";
    }
    
    else if (number === 2) {
        addSelectionImage("computer", "scissor");
        return "scissor";
    }
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
        changeColorLoseRound();
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
        changeColorWinRound();
    }
    //tie
    else if (playerSelection === computerSelection)  {
        result.textContent = "It's a tie";
        updateScore();
        changeColorTieRound();
    }
}

let resultContainer = document.querySelector(".resultContainer");
let playerBackgroundColor = document.querySelector(".playerBackgroundColor");
let computerBackgroundColor = document.querySelector(".computerBackgroundColor");

//Change the color when playing the game
function changeColorWinRound() {
        resultContainer.style.backgroundColor = "green";
        playerBackgroundColor.style.backgroundColor = "green";
        computerBackgroundColor.style.backgroundColor = "red";
}

function changeColorLoseRound() {
        resultContainer.style.backgroundColor = "red";
        playerBackgroundColor.style.backgroundColor = "red";
        computerBackgroundColor.style.backgroundColor = "green";
}

function changeColorTieRound() {
        resultContainer.style.backgroundColor = "blue";
        playerBackgroundColor.style.backgroundColor = "blue";
        computerBackgroundColor.style.backgroundColor = "blue";
}

function updateScore() {
    computerScore.textContent = computerWin;
    playerScore.textContent = playerWin;
}

function finishGame() {
    if (computerWin === 5 || playerWin=== 5) {
        finishGameText();
        showHiddenElement();
        stopButtonSelectionFunction();
    }
}

function finishGameText() {
    if (playerWin === 5) {
        gameWinner.textContent = "Congratulation, you win the game!!!";
    } else {
        gameWinner.textContent = "Unfortunately, you lose the game!!!";
    }
}

function stopButtonSelectionFunction() {
    playerSelection.forEach(select => {
        select.removeEventListener("click", getSelected);
    })
    removeHoverEffect();
}

function showHiddenElement() {
    centerBox.removeAttribute("hidden");
    
}

function addSelectionImage(player, selection) {
    if (player === "player") {
        document.getElementById("playerSelectImage").src=`image/${selection}.png`;
    } else {
        document.getElementById("computerSelectImage").src=`image/${selection}.png`;
    }
}

playerSelection.forEach(button => { 
    button.addEventListener('mouseover', mouseOverSelection) 
});

function mouseOverSelection(selection) {
    let mouseOver = selection.target.id;
    document.getElementById("playerSelectImage").src=`image/${mouseOver}.png`
};

playerSelection.forEach(button => { 
    button.addEventListener('mouseleave', mouseLeaveSelection) 
});

function mouseLeaveSelection() {
    setTimeout(() => {
        document.getElementById("playerSelectImage").src=`image/${playerChoice}.png`;
    }, 200)
};

//remove hover effect
let hover = document.querySelectorAll("button.playerSelection");
function removeHoverEffect() {
    hover.forEach(hoverButton => {
        hoverButton.classList.remove("playerSelection")
    });
    playerSelection.forEach(button => { 
        button.removeEventListener('mouseover', mouseOverSelection) 
    });
}