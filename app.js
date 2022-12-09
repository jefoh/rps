let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let answer;
    switch (randomNumber) {
        case 0:
            answer = "rock";
            break;
        case 1:
            answer = "paper";
            break;
        case 2:
            answer = "scissors";
            break;
        default:
            answer = "error"
    }
    return answer;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "It's a tie!";
        } else if (computerSelection === "scissors") {
            result = "You win! Rock beats scissors.";
            userScore++;
        } else if (computerSelection === "paper") {
            result = "You lose. Paper beats rock.";
            computerScore++
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            result = "It's a tie!";
        } else if (computerSelection === "rock") {
            result = "You win! Paper beats rock.";
            userScore++;
        } else if (computerSelection === "scissors") {
            result = "You lose. Scissors beats paper.";
            computerScore++;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            result = "It's a tie!";
        } else if (computerSelection === "paper") {
            result = "You win! Scissors beats paper.";
            userScore++;
        } else if (computerSelection === "rock") {
            result = "You lose. Rock smash scissor.";
            computerScore++;
        }
    } else {
        result = "Something went wrong. Please check your spelling and play again.";
    }
    return result;
}

function game() {
    let computerChoice;
    let round = 1;
    while (computerScore < 5 && userScore < 5) {
        userChoice = prompt("Round " + round + ": Choose Rock, Paper or Scissors: ");
        computerChoice = getComputerChoice();
        console.log(playRound(userChoice, computerChoice));
        console.log("Computer Score: " + computerScore);
        console.log("User Score: " + userScore);
        round++;
    }
    if (computerScore === 5) {
        console.log("Good try, but the computer has bested you. Try again.");
    } else if (userScore === 5) {
        console.log("Wooo, you win! Good job!");
    }
}