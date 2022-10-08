function computerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

const playerSelection = "rock";
const computerSelection = computerChoice();

function playRound (playerSelection, computerSelection) {
    let result = "";

    if (playerSelection == "rock") {
        if (computerSelection === "paper") {
            result = "You lose! Paper beats Rock";
        }
        else if (computerSelection === "scissors") {
            result = "You win! Rock beats Scissors"
        }
        else {
            result = "It's a tie..."
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            result = "You lose! Scissors beat Paper";
        }
        else if (computerSelection === "rock") {
            result = "You win! Paper beats Rock";
        }
        else {
            result = "It's a tie...";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You lose! Rock beats Scissors"
        }
        else if (computerSelection === "paper") {
            result = "You win! Scissors beat paper";
        }
        else (computerSelection === "scissors")
            result = "It's a tie..."
        }
        return console.log(result);
    }
    


console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
