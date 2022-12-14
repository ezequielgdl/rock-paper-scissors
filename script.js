const choiceBtns = document.querySelectorAll('[data-selection]');
const message = document.querySelector('.message');
const choiceMessage = document.querySelector('.choices-msg');
let scorePlayer = document.querySelector('.player-score');
let scoreComputer = document.querySelector('.computer-score');
let player;
let computer;
let tempPlayerScore = 0;
let tempComputerScore = 0;


// Click on an image to choose player's choice and plays the game
choiceBtns.forEach(input => input.addEventListener("click", (e) => {
    player = input.alt;
    computerPlay = computerChoice();
    choiceMessage.textContent = `You chose ${player}. I chose ${computerPlay}.`
    message.textContent = playRound();
    scorePlayer.textContent = tempPlayerScore; 
    scoreComputer.textContent = tempComputerScore;
    if (tempPlayerScore == 5) {
        message.textContent = "You win the game!"
        message.setAttribute("style", "color: green; font-size: 48px");
        choiceMessage.textContent = " ";
        disableButtons();
        restartGame();
    }
    if (tempComputerScore == 5) {
        message.textContent = "You lose the game!";
        message.setAttribute("style", "color: red; font-size: 48px");
        choiceMessage.textContent = " ";
        disableButtons();
        restartGame();
    }
}));

// Disable buttons when someone wins
function disableButtons() {
    choiceBtns.forEach(input => {
        input.disabled = true;
        input.classList.add('noHover');
        })
}

// Gets the random computer choice
function computerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return computer = choices[Math.floor(Math.random() * choices.length)]
}

// Create button
function restartGame() {
    let btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'PLAY AGAIN?');
    btn.setAttribute('class', 'button-class')
    btn.addEventListener('click', refreshPage) 
    let location = document.getElementById('refresh');
    location.appendChild(btn);
    
};

// Refresh page function
const refreshPage = () => {
    location.reload();
}

// Game functionality
function playRound() {
    if (player === computer){
        return "It's a tie...";
    }
    else if (
        (player == "Rock" && computer == "Scissors") ||
        (player == "Scissors" && computer == "Paper") ||
        (player == "Paper" && computer == "Rock") 
    ){
            tempPlayerScore++;
            return `You win! ${player.toUpperCase()} beats ${computer.toUpperCase()}.`
        }
    else {
        tempComputerScore++;
        return `You lose! ${computer.toUpperCase()} beats ${player.toUpperCase()}.`
    }
}