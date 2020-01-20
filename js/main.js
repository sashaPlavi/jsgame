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
  showWiner(winner, computerChoice);
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
function showWiner(winner, computerChoice) {
  if (winner === "player") {
    scoreboard.player++;
    result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <stron>${computerChoice}</strong></p>
        `;
    console.log("win");
  } else if (winner === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer chose <stron>${computerChoice}</strong></p>
        `;
  } else {
    result.innerHTML = `
    <h1>Drow</h1>
    <i id="rock" class="choice fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <stron>${computerChoice}</strong></p>
    `;
  }
  score.innerHTML = `<p> Player:${scoreboard.player}</p>
  <p> Computer:${scoreboard.computer}</p>
  `;
  modal.style.display = "block";
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
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
function restartGame() {
  console.log("res");

  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `;
}

choices.forEach(choise => choise.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
console.log("bla");
