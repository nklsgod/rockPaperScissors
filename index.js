"use strict";

let humanScore = 0;
let computerScore = 0;

function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  getWinner();
}

playGame(5);
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`This game is a draw you both have ${humanChoice}`);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Player Won. Rock beats scissors");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lost. Paper beats rock!");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Player Won. Paper beats rock ");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer Won. Scissors beats paper ");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer Won. Rock beats Scissors ");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Player Won. Scissors beats paper ");
    humanScore++;
  }
}

function getComputerChoice() {
  let randomizer = Math.floor(Math.random() * 3);

  if (randomizer === 0) {
    return "rock";
  } else if (randomizer === 1) {
    return "scissors";
  } else {
    return "paper";
  }
}

function getHumanChoice() {
  const humanInput = prompt("Enter rock,paper,scissors");
  if (humanInput.toLocaleLowerCase() === "rock") {
    return "rock";
  } else if (humanInput.toLocaleLowerCase() === "paper") {
    return "paper";
  } else {
    return "scissors";
  }
}

function getWinner() {
  if (humanScore > computerScore) {
    console.log(`You won with ${humanScore} to ${computerScore}`);
  } else {
    console.log(`You lost with ${humanScore} to ${computerScore}`);
  }
}
