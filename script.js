let secretNumber;
let attemptsLeft = 10;

function generateNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 3;
  document.getElementById("attempts").textContent = attemptsLeft;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  if (attemptsLeft <= 0) {
    message.textContent = `Game over! The number was ${secretNumber}`;
    return;
  }

  attemptsLeft--;
  document.getElementById("attempts").textContent = attemptsLeft;

  if (guess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed the number!";
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low!";
  } else {
    message.textContent = "📈 Too high!";
  }

  if (attemptsLeft === 0 && guess !== secretNumber) {
    message.textContent = `❌ Out of attempts! The number was ${secretNumber}`;
  }
}

function resetGame() {
  generateNumber();
}

generateNumber(); // Start game on load
