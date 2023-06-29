// 1. define variable
const board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "🥯";
let isGameOver = false;

// 2. add click function to each cells
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", makeMove);
});

// 3. Make move
function makeMove() {
  //4. return the index of the clicked cell within the array of cells
  const cellIndex = Array.from(cells).indexOf(this);

  if (board[cellIndex] === "" && !isGameOver) {
    //5. to store on the board
    board[cellIndex] = currentPlayer;
    //6. to display in the web
    this.textContent = currentPlayer;
    //7. add classlist for css purpose
    this.classList.add(currentPlayer);

    // 9. check win
    if (checkWin(currentPlayer)) {
      endGame(`${currentPlayer} wins!`);
    } else if (board.every((cell) => cell !== "")) {
      endGame("It's a tie!");
    } else {
      currentPlayer = currentPlayer === "🥯" ? "🦞" : "🥯";
    }
  }
}

// 8. Check for a winning condition
function checkWin(player) {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  // Check each winning condition
  for (let i = 0; i < winCombinations.length; i++) {
    const [a, b, c] = winCombinations[i];
    if (board[a] === player && board[b] === player && board[c] === player) {
      return true; // Player has won
    }
  }

  return false;

  //   return winCombinations.some((combination) => {
  //     return combination.every((index) => board[index] === player);
  //   });
}

// End the game and display the message
function endGame(messageText) {
  isGameOver = true;
  message.textContent = messageText;
}

// Reset the game
resetButton.addEventListener("click", resetGame);

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  isGameOver = false;
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
  message.textContent = "";
}
