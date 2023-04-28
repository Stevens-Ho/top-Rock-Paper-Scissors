# top-Rock-Paper-Scissors

First javascript project from the odin project. I will try my best to plan all solution first before starting to write code. The solution I will write at the bottom.

Started date: 27/04/23

Project link: https://stevens-ho.github.io/top-Rock-Paper-Scissors/




Solution
Create a function name as getComputerChoice().
In the function, getComputerChoice() will generate random number from 0 to 3 by using Math.floor(Math.random()*3).
    if number equal to 0, 
        getComputerChoice() will return rock
    else if number equal to 1
        getComputerChoice() will return paper
    else if number equal to 2
        getComputerChoice() will return scissor

Create variable computerWin equal to 0
Create variable userWin equal to 0
Create a function name as playRound() with parameter playerSelection and computerSelection.
    if playerSelection is rock and computerSelection is paper
        playRound() will return "You Lose! Paper beats Rock"
        computerWin +1
    else if playerSelection is paper and computerSelection is scissor
        playRound() will return "You Lose! Scissor beats Paper"
        computerWin +1
    else if playerSelection is scissor and computerSelection is rock
        playRound() will return "You Lose! Rock beats Scissor"
        computerWin +1
    else if playerSelection is paper and computerSelection is rock
        playRound() will return "You Win! Paper beats Rock"
        userWin +1
    else if playerSelection is rock and computerSelection is scissor
        playRound() will return "You Win! Rock beats Scissor"
        userWin +1
    else if playerSelection is scissor and computerSelection is paper
        playRound() will return "You Win! Scissor beats Paper"
        userWin +1
    else if playerSelection is scissor and computerSelection is scissor
        playRound() will return "It's a tie"
    else if playerSelection is paper and computerSelection is paper
        playRound() will return "It's a tie"
    else if playerSelection is rock and computerSelection is rock
        playRound() will return "It's a tie"

Create a function name as game()
    for variable playChance with number 5, if playChance more than 0, playChance -1
        Create a new variable name userInput and will get input from the user. 
        The input only can contain rock, scissor and paper with case-insensitive
        If don`t provide the correct string, 
            display "Please only provide the input 'rock','scissor' and 'paper'!!!"
            ask user to provide the input again
        run the function playRound(), the argument will be variable userInput and function getComputerChoice()

run the function game()
If computerWin more than userWin
    display "Unfortunately, you lose the game!!!"
Else if computerWin more than userWin
    display "Congratulation, you win the game!!!"
