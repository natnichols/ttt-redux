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
const resetBtnEl = document.getElementById('reset')

/*------- Event Listeners -------*/
squareEls.forEach(function(squareEl) {
  squareEl.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', init)

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
  checkForWinner()
  switchPlayerTurn()
  render()
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

function checkForWinner() {
  winningCombos.forEach(combo => {
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
      console.log(`Mulder, there's a winner`)
      winner = true
    }
  })
}

function switchPlayerTurn() {
  if (!winner) {
    turn *= -1
  }
}


// 6.5 - Tying it all together

  // 6.5a) In our `handleClick` function, call `placePiece`, `checkForTie`, `checkForWinner`, and `switchPlayerTurn`. Don’t forget that `placePiece` needs `sqIdx` as an argument! 

  // 6.5b) Finally, now that all the state has been updated we need to render that updated state to the user by calling the `render` function that we wrote earlier.

// Step 7 - Create Reset functionality

  // 7a) Add a reset button to the HTML document.

  // 7b) Store the new reset button element as a cached element reference in a constant named `resetBtnEl`.

  // 7c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it should call the `init` function you created in step 3.