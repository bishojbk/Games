let computerChoiceDisplay = document.getElementById("computerchoice");
let userChoiceDisplay = document.getElementById("yourchoice");
let resultDisplay = document.getElementById("result");
let possibleChoices = document.querySelectorAll("button");
let computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  let choices = ["rock", "paper", "scissor"];
  let randomNumber = Math.floor(Math.random() * 2);
  computerChoice = choices[randomNumber];
  console.log(computerChoice);
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (userChoice === computerChoice) {
    resultDisplay.innerHTML = "It was a draw";
  }
  if (userChoice === "rock" && computerChoice === "scissor") {
    resultDisplay.innerHTML = "You Won";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    resultDisplay.innerHTML = "You Lost";
  }
  if (userChoice === "paper" && computerChoice === "scissor") {
    resultDisplay.innerHTML = "You Won";
  }
  if (userChoice === "scissor" && computerChoice === "paper") {
    resultDisplay.innerHTML = "You Won";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    resultDisplay.innerHTML = "You Won";
  }
}
