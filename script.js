let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = parseInt((Math.random() * 100) % 3)
    switch (number) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            humanScore++;
            computerScore++;
            console.log("It's a draw!")
        }
        if (computerChoice == "rock") {
            humanScore++;
            console.log("You won! Paper beats Rock!")
        }
        if (computerChoice == "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper!")
        }
    }
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            humanScore++;
            computerScore++;
            console.log("It's a draw!")
        }
        if (computerChoice == "scissors") {
            humanScore++;
            console.log("You won! Rock beats Scissors!")
        }
        if (computerChoice == "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock!")
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            humanScore++;
            computerScore++;
            console.log("It's a draw!")
        }
        if (computerChoice == "paper") {
            humanScore++;
            console.log("You won! Scissors beats Paper!")
        }
        if (computerChoice == "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors!")
        }
    }
}

let menu = document.querySelector('#menu');
let plays = 0

menu.addEventListener('click', (event) => {
    let target = event.target;
    const computerSelection = getComputerChoice();

    switch (target.id) {
        case 'scissors':
            playRound("scissors", computerSelection);
            break;
        case 'paper':
            playRound("paper", computerSelection);
            break;
        case 'rock':
            playRound("rock", computerSelection);
            break;
    }
    if (plays++ < 4) {
        humanDiv.textContent = ("Human: " + humanScore);
        computerDiv.textContent = ("Computer: " + computerScore);
        humanDiv.style.display = 'block';
        computerDiv.style.display = 'block';
        resultDiv.style.display = 'none';
    }
    else {
        resultDiv.textContent = (((humanScore > computerScore) ? "You won!" : (humanScore < computerScore) ? "You lost!" : "Draw!").concat(" " + humanScore + ":" + computerScore));
        plays = 0;
        humanScore = 0;
        computerScore = 0;
        humanDiv.style.display = 'none';
        computerDiv.style.display = 'none';
        resultDiv.style.display = 'block';
    }
});

const container = document.querySelector("body");
const resultDiv = document.createElement("div");
const humanDiv = document.createElement("div");
const computerDiv = document.createElement("div");
humanDiv.classList.add("result");
computerDiv.classList.add("result");
resultDiv.classList.add("result");
resultDiv.classList.add("finish");
container.appendChild(humanDiv);
container.appendChild(computerDiv);
container.appendChild(resultDiv);