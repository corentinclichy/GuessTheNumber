let correctNumber = getRandomNumber();

let guesses = [];

window.onload = function () {
  document.getElementById("check").addEventListener("click", playGame);
  document.getElementById("restart").addEventListener("click", initGame);
};

function playGame() {
  let userNumber = document.getElementById("guessNumber").value;
  checkResult(userNumber);
  addNumberToHistory(userNumber);
  displayHistory();
  document.getElementById("guessNumber").value = "";
  disabledButton();
}

function initGame() {
  document.getElementById("result").innerHTML = "";
  guesses = [];
  document.getElementById("history").innerHTML = "";
  correctNumber = getRandomNumber();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function checkResult(numToCheck) {
  if (numToCheck < correctNumber) {
    getDialog("warning", showIsUnder());
  } else if (numToCheck > correctNumber) {
    getDialog("warning", showIsAbove());
  } else {
    getDialog("won", showYouWon());
  }
}

function addNumberToHistory(numberGuess) {
  guesses.push(numberGuess);
}

function displayHistory() {
  let history = '<ul class="list-group">';
  for (let index = guesses.length - 1; index >= 0; index--) {
    const item = '<li class="list-group-item">' + guesses[index] + "</li>";
    history += item;
  }

  history += "</ul>";

  console.log(history);
  document.getElementById("history").innerHTML = history;
}

// GAME DIALOG TO SEE IF IT'S CORRECT OR NOT
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
    case "danger":
      dialog = "<div class='alert alert-danger' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  text = "You win the 🎲";

  const dialog = getDialog("won", text);

  document.getElementById("result").innerHTML = dialog;
}

function showIsAbove() {
  text = "Your guess is to high !";

  const dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

function showIsUnder() {
  text = "Your guess is to low !";

  const dialog = getDialog("warning", text);

  document.getElementById("result").innerHTML = dialog;
}

// disabled button if no value on the field

function disabledButton() {
  if (document.getElementById("guessNumber").value === "") {
    document.getElementById("check").disabled = true;
  } else {
    document.getElementById("check").disabled = false;
  }
}
