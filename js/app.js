/*------- Constants -------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


/*------- Variables (state) -------*/
let board, turn, winner, tie


/*------- Cached Element References -------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')

/*------- Event Listeners -------*/
squareEls.forEach(function(squareEl) {
  squareEl.addEventListener('click', handleClick)
})


/*------- Functions -------*/

init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = false
  tie = false
  console.log(`turn = ${turn}`)
  console.log(`winner = ${winner}`)
  console.log(`tie = ${tie}`)
  console.log(board)
  render()
}

function render() {
  updateBoard()
  updateMessage()
}

function updateBoard() {
  board.forEach((sqrVal, idx) => {
    if (sqrVal === 1) {
      squareEls[idx].textContent = `X`
    }
    if (sqrVal === -1) {
      squareEls[idx].textContent = `O`
    }
    if (sqrVal === null) {
      squareEls[idx].textContent = ``
    }
  })
}

function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = `It's ${turn === 1 ? 'X' : 'O'}'s turn!`
  } else if (!winner && tie) {
    messageEl.textContent = `It's a tie, which is technically called a Cat's game!`
  } else {
    messageEl.textContent = `Congratulations ${turn === 1 ? 'X' : 'O'}, you've won!`
  }
}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.replace('sq', ''))
  if (board[sqIdx] || winner) {
    return
  }
  console.log(`Mulder you clicked`)
  placePiece(sqIdx)
  checkForTie()
}

function placePiece(idx) {
  board[idx] = turn
  console.log(board[idx])
}

function checkForTie() {
  if (board.includes(null)) {
    return
  } else {
    console.log('Mulder, the tie fn is running')
    tie = true
  }
}

// 6.2 - `checkForTie`

  // 6.2a) Create a function named `checkForTie`.

  // 6.2b) Check if the `board` array still contains any `null` elements. If it does, we can leave `tie` as false. Otherwise, set `tie` to true.

// 6.3 - `checkForWinner`

  // 6.3a) Create a function called `checkForWinner`

  // 6.3b) Determine if a player has won using one of the two options below. Option 1 is a more elegant method that takes advantage of the `winningCombos` array you wrote above in step 5. Option 2 might be a little simpler to comprehend, but you'll need to write more code. This option won't take advantage of the winningCombos array, but using it as a reference will help you build a solution. Ensure you choose only one path.
  //       Option 1) Loop through each of the winning combination arrays defined in the `winningCombos` array. Total up the three board positions using the three indexes in the current combo. Convert the total to an absolute value (convert any negative total to positive). If the total equals 3, we have a winner, and can set `winner` to true.
  //       Option 2) For each one of the winning combinations you wrote in step 5, find the total of each winning combination. Convert the total to an absolute value (convert any negative total to positive). If the total equals 3, we have a winner, and can set `winner` to true.

// 6.4 - `switchPlayerTurn`

  // 6.4a) Create a function called `switchPlayerTurn`.

  // 6.4b) If `winner` is true, return out of the function - we don’t need to switch the turn anymore!

  // 6.4c) If `winner` is false, change the turn by multiplying `turn` by `-1` (this flips a `1` to `-1`, and vice-versa).


// 6.5 - Tying it all together

  // 6.5a) In our `handleClick` function, call `placePiece`, `checkForTie`, `checkForWinner`, and `switchPlayerTurn`. Don’t forget that `placePiece` needs `sqIdx` as an argument! 

  // 6.5b) Finally, now that all the state has been updated we need to render that updated state to the user by calling the `render` function that we wrote earlier.

// Step 7 - Create Reset functionality

  // 7a) Add a reset button to the HTML document.

  // 7b) Store the new reset button element as a cached element reference in a constant named `resetBtnEl`.

  // 7c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it should call the `init` function you created in step 3.