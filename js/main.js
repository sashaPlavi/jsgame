const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  computer: 0
};

function play(e) {
  restart.style.display = "inline-block";
  const playerchoice = e.target.id;
  const computerChoice = getComputerCoice();
  const winner = getwinner(playerchoice, computerChoice);
  console.log("c " + computerChoice);
  console.log("p " + playerchoice);
  console.log(winner);
}
function getwinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "paper") {
    if (c === "rock") {
      return "player";
    } else {
      return "computer";
    }
  } else if (p === "scissors") {
    if (c === "paper") {
      return "player";
    } else {
      return "computer";
    }
  } else if (p === "rock") {
    if (c === "scissors") {
      return "player";
    } else {
      return "computer";
    }
  }
}
function getComputerCoice() {
  const random = Math.random();
  if (random < 0.3) {
    return "rock";
  } else if (random < 0.6) {
    return "scissors";
  } else {
    return "paper";
  }
}
choices.forEach(choise => choise.addEventListener("click", play));
console.log("bla");
