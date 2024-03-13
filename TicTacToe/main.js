const CONSOLE_MODE = "console";
const WEB_MODE = "web";
// Choose between consoleMode or webMode
const RUNNING_MODE = CONSOLE_MODE

const Logger = () => {
  const log = (message) => {
    console.log(message);
  };
  const error = (message) => {
    console.error(message);
  };

  return { log, error };
};

const logger = Logger(); // Create an instance of the logger
// Class for each cell in the board
class Cell {
  constructor() {
    this.value = 0; // Default value
  }

  // Set the cell's value if it's unoccupied
  setValue(token) {
    if (this.value === 0) {
      this.value = token;
      return true; // Successfully set the value
    }
    return false; // Cell is already occupied
  }

  // Reset the cell's value
  reset() {
    this.value = 0;
  }
}

// Class for the game board
class GameBoard {
  constructor() {
    this.cells = Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => new Cell())
    );
  }

  // Set the token for a specific cell
  setToken(row, col, token) {
    if (row < 0 || row >= 3 || col < 0 || col >= 3) {
      return false; // Invalid row or column
    }
    return this.cells[row][col].setValue(token);
  }

  // Reset the entire board to its original state
  resetBoard() {
    this.cells.forEach((row) => row.forEach((cell) => cell.reset()));
  }

  // Log the 2D cell array like a table using logger (console)
  logBoard() {
    this.cells.forEach((row) => {
      logger.log(row.map((cell) => cell.value).join(" "));
    });
  }

  // TODO: Uncomment this 
  // Render the board to the DOM
  // renderBoard() {
  //   const boardElement = document.getElementById("board"); // Replace 'board' with your actual HTML element ID
  //   // Clear the existing board
  //   boardElement.innerHTML = "";
  //   this.cells.forEach((row, rowIndex) => {
  //     const rowElement = document.createElement("div");
  //     rowElement.className = "row";
  //     row.forEach((cell, colIndex) => {
  //       const cellElement = document.createElement("div");
  //       cellElement.className = "cell";
  //       cellElement.textContent = cell.value === 0 ? "_" : cell.value;
  //       cellElement.addEventListener("click", () => {
  //         logger.log("Handle cell click" + rowIndex + colIndex);
  //         game.handleUserCellClick(rowIndex, colIndex);
  //       });
  //       rowElement.appendChild(cellElement);
  //     });
  //     boardElement.appendChild(rowElement);
  //   });
  // }

  // Check game logic to determine if there's a winner

  // Check game logic to determine if there's a winner or a draw
  checkWinner() {
    // Check rows and columns for a winner
    for (let i = 0; i < 3; i++) {
      if (
        this.cells[i][0].value !== 0 &&
        this.cells[i][0].value === this.cells[i][1].value &&
        this.cells[i][1].value === this.cells[i][2].value
      ) {
        return this.cells[i][0].value; // Return the winning token
      }
      if (
        this.cells[0][i].value !== 0 &&
        this.cells[0][i].value === this.cells[1][i].value &&
        this.cells[1][i].value === this.cells[2][i].value
      ) {
        return this.cells[0][i].value; // Return the winning token
      }
    }

    // Check diagonals for a winner
    if (
      this.cells[0][0].value !== 0 &&
      this.cells[0][0].value === this.cells[1][1].value &&
      this.cells[1][1].value === this.cells[2][2].value
    ) {
      return this.cells[0][0].value; // Return the winning token
    }
    if (
      this.cells[0][2].value !== 0 &&
      this.cells[0][2].value === this.cells[1][1].value &&
      this.cells[1][1].value === this.cells[2][0].value
    ) {
      return this.cells[0][2].value; // Return the winning token
    }

    // Check for a draw
    let countEmptyCells = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.cells[i][j].value === 0) {
          countEmptyCells++;
        }
      }
    }

    if (countEmptyCells === 0) {
      return "draw"; // Return 'draw' to indicate a tie game
    }

    // No winner or draw found
    return 0;
  }

  log() {
    // Make easy to switch between logBoard (console)  and renderBoard which return DOM
    if (RUNNING_MODE === WEB_MODE) {
      this.renderBoard();
    } else if (RUNNING_MODE === CONSOLE_MODE) {
      this.logBoard();
    } else {
      logger.error("Unexpected mode " + RUNNING_MODE);
    }
  }
}

// Class for a player
class Player {
  constructor(username, token) {
    this.username = username;
    this.token = token;
  }

  // Get the player's token
  getToken() {
    return this.token;
  }
}

// Main function to control the game
function gameController() {
  let userPlayer = new Player("Player X", "X");
  let computerPlayer = new Player("Player O", "O");
  let gameStage = "Running";

  const board = new GameBoard();
  let currentActivePlayer = userPlayer;
  // Initialize the board and render it to the DOM
  board.log();

  function changeActivePlayer() {
    currentActivePlayer =
      currentActivePlayer === userPlayer ? computerPlayer : userPlayer;
  }

  // Function to switch userPlayer and computerPlayer and reset the board
  function switchPlayers() {
    const temp = userPlayer;
    userPlayer = computerPlayer;
    computerPlayer = temp;
  }
  function restartGame() {
    board.resetBoard();
    // TODO: Think way to track game stage.
    gameStage = "Running";
    if (currentActivePlayer === computerPlayer) {
      addComputerToken();
    }
    board.log();

  }

  // Function to add a token for the computer player (random unoccupied cell)
  function addComputerToken() {
    if (gameStage === "Running") {
      const emptyCells = [];
      // Find all empty cells
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board.cells[i][j].value === 0) {
            emptyCells.push({ row: i, col: j });
          }
        }
      }

      // If there are empty cells, choose a random one and add the computer's token
      if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const { row, col } = emptyCells[randomIndex];
        board.setToken(row, col, currentActivePlayer.getToken());
      }
    }
  }

  function showGameResult(winner) {
    // TODO: Base on gameStage variable to handle to show result to user
    if (!winner) {
      logger.log(gameStage);
    } else {
      logger.log(`winner is ${winner}`);
    }
  }

  function isGameOver() {
    const winner = board.checkWinner();

    if (winner === "draw") {
      gameStage = "Draw";
      showGameResult();
      // TODO: Dialog need to action to restart game
      // resetGame();
      return true;
    } else if (winner) {
      gameStage = "End";
      showGameResult(winner);
      // TODO: Dialog need to action to restart game
      // restartGame();

      return true;
    }

    return false;
  }

  // Implement the game loop and event handling here
  // Call addComputerToken to make the computer player take a turn when it's their move
  // Don't forget to change the active player after the computer's move
  // Set token to cell and check if game over
  function handleUserCellClick(row, col) {
    // After user click to cell will send event and use this function to set token
    // Check if this change token cause game over, if not computer will set random token now again will need to confirm if game over or not.
    if (gameStage === "Running") {
      if (board.setToken(row, col, currentActivePlayer.getToken())) {
        board.log();
        if (!isGameOver()) {
          changeActivePlayer();
          // TODO: Learning promise to make add computer delay a little bit 
          // setTimeout( this.addComputerToken , 1000); // Add a token for the computer player
          addComputerToken();
          board.log(); // Render the board after each move
          isGameOver(); // Check if the game is over
          changeActivePlayer();
        }
      }
    } else {
      showGameResult();
    }
  }
  return {
    changeActivePlayer,
    switchPlayers,
    addComputerToken,
    handleUserCellClick,
    isGameOver,
    restartGame,
    showGameResult,
  };
}
const game = gameController();
// // For debug game logic
// outLoop: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     game.handleCellClick(i, j);
//     console.log("\n");
//     const gameOver = game.isGameOver();
//     if (gameOver) {
//       break outLoop;
//     }
//   }
// }

// TODO: 
// document.addEventListener("DOMContentLoaded", function () {
//   // Check if the element with ID "restart-game" already exists in the body
//   const restartButton = document.getElementById("restart-game");

//   if (!restartButton) {
//     // If it doesn't exist, create the element and add an event listener
//     const newRestartButton = document.createElement("button");
//     newRestartButton.id = "restart-game";
//     newRestartButton.textContent = "Restart Game";

//     newRestartButton.addEventListener("click", function () {
//       // Your event handling code here
//       game.restartGame();

//     });

    // Append the button to the body
    document.body.appendChild(newRestartButton);
  }
});
