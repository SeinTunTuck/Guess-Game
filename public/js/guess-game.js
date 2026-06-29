let targetNumber = 0;
let attempt = 0;
const maxAttempt = 5;

window.onload = function () {
  targetNumber = Math.floor(Math.random() * 20) + 1;
  attempt = 0;

  document.getElementById("guess-value").value = "";
  document.getElementById("attempt").innerText = "0";
  document.getElementById("result").innerText = "";

  document.getElementById("guess-btn").style.display = "inline-block";
  document.getElementById("restart-btn").style.display = "none";

  document.getElementById("guess-btn").addEventListener("click", checkGuess);
  document.getElementById("restart-btn").addEventListener("click", restartGame);
  document.getElementById("guess-value").focus();
};

function isNumeric(value) {
  return value !== "" && !isNaN(value);
}

function restartGame() {
  targetNumber = Math.floor(Math.random() * 20) + 1;
  attempt = 0;

  document.getElementById("guess-value").value = "";
  document.getElementById("attempt").innerText = "0";
  document.getElementById("result").innerText = "";

  document.getElementById("guess-btn").style.display = "inline-block";
  document.getElementById("restart-btn").style.display = "none";

  document.getElementById("guess-value").focus();
}

function checkGuess() {
  const input = document.getElementById("guess-value").value;

  if (!isNumeric(input)) {
    document.getElementById("result").innerText = "Please enter a number.";
    return;
  }

  const guess = Number(input);

  if (guess < 1 || guess > 20) {
    document.getElementById("result").innerText =
      "Enter a number between 1 and 20.";
    return;
  }

  attempt++;
  document.getElementById("attempt").innerText = String(attempt);

  if (guess === targetNumber) {
    document.getElementById("result").innerText = "You WIN";
    endGame();
  } else if (attempt >= maxAttempt) {
    document.getElementById("result").innerText = "You LOSE";
    endGame();
  } else if (guess > targetNumber) {
    document.getElementById("result").innerText = guess + " is too high";
  } else {
    document.getElementById("result").innerText = guess + " is too low";
  }

  document.getElementById("guess-value").value = "";
  document.getElementById("guess-value").focus();
}

function endGame() {
  document.getElementById("guess-btn").style.display = "none";
  document.getElementById("restart-btn").style.display = "inline-block";
}
