let computerWin = 0;
let playerWin = 0;

const playerSelection = document.querySelectorAll(".playerSelection");
playerSelection.forEach(button => { 
    button.addEventListener('click', getSelected);
});

let playerChoice = "rockPaperScissor";
function getSelected(e) {
    playerChoice = e.target.id;
    playRound(playerChoice, getComputerChoice());
    addSelectionImage("player", playerChoice);
    finishGame();
}

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector(".result");
    //lose
    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
        ) {
        result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
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
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
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

function updateScore() {
    const computerScore = document.querySelector(".computerScore");
    const playerScore = document.querySelector(".playerScore");
    computerScore.textContent = computerWin;
    playerScore.textContent = playerWin;
}

function addSelectionImage(player, selection) {
    if (player === "player") {
        document.getElementById("playerSelectImage").src=`image/${selection}.png`;
    } else {
        document.getElementById("computerSelectImage").src=`image/${selection}.png`;
    }
}

function finishGame() {
    if (computerWin === 5 || playerWin=== 5) {
        finishGameText();
        showHiddenElement();
        stopBtnSelectionFunction();
        playAgainBtn();
    }
}

function finishGameText() {
    const gameWinner = document.querySelector(".gameWinner");
    if (playerWin === 5) {
        gameWinner.textContent = "Congratulation, you win the game!!!";
    } else {
        gameWinner.textContent = "Unfortunately, you lose the game!!!";
    }
}

function showHiddenElement() {
    const centerBox = document.querySelector(".centerBox");
    centerBox.removeAttribute("hidden");
}

function stopBtnSelectionFunction() {
    playerSelection.forEach(select => {
        select.removeEventListener("click", getSelected);
    })
    removeHoverEffect();
}

function removeHoverEffect() {
    const hover = document.querySelectorAll("button.playerSelection");
    hover.forEach(hoverButton => {
        hoverButton.classList.remove("playerSelection");
    });
    playerSelection.forEach(button => { 
        button.removeEventListener('mouseover', mouseOverSelection); 
    });
}

const resultContainer = document.querySelector(".resultContainer");
const playerBackgroundColor = document.querySelector(".playerBackgroundColor");
const computerBackgroundColor = document.querySelector(".computerBackgroundColor");
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

function playAgainBtn() {
    const playAgain = document.querySelector(".playAgain");
    playAgain.addEventListener("click", () => location.reload());
}

playerSelection.forEach(button => { 
    button.addEventListener('mouseover', mouseOverSelection); 
});

function mouseOverSelection(selection) {
    const mouseOver = selection.target.id;
    setTimeout(() => {
        document.getElementById("playerSelectImage").src=`image/${mouseOver}.png`;
    }, 200);
};

playerSelection.forEach(button => { 
    button.addEventListener('mouseleave', mouseLeaveSelection);
});

function mouseLeaveSelection() {
    setTimeout(() => {
        document.getElementById("playerSelectImage").src=`image/${playerChoice}.png`;
    }, 200);
}