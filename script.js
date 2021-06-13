import { startConfetti, stopConfetti, removeConfetti } from './confetti.js'

// DOM Elements
const playerScoreEl = document.getElementById('playerScore')
const playerChoiceEl = document.getElementById('playerChoice')
const computerScoreEl = document.getElementById('computerScore')
const computerChoiceEl = document.getElementById('computerChoice')
const resultText = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const playerLizard = document.getElementById('playerLizard')
const playerSpock = document.getElementById('playerSpock')

const computerRock = document.getElementById('computerRock')
const computerPaper = document.getElementById('computerPaper')
const computerScissors = document.getElementById('computerScissors')
const computerLizard = document.getElementById('computerLizard')
const computerSpock = document.getElementById('computerSpock')

const allGameIcons = document.querySelectorAll('.far')

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = ''

let playerScore = 0
let computerScore = 0








// Reset all 'selected' icons to not selected
function resetSelected() {
  stopConfetti()
  removeConfetti()
  allGameIcons.forEach((icon) => icon.classList.remove('selected'))
}


// Reset score and player/computer choice
function resetAll() {
  playerScore = 0
  playerScoreEl.textContent = '0'
  playerChoiceEl.textContent = ''

  computerScore = 0
  computerScoreEl.textContent = '0'
  computerChoiceEl.textContent = ''

  resultText.textContent = ''

  resetSelected()
}
window.resetAll = resetAll


// Update the score and resultText
function updateScore(playerChoice) {
  // Check for tie
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!" 
  } else {
    const choice = choices[playerChoice]

    if (choice.defeats.includes(computerChoice)) {
      playerScore++
      startConfetti()
      resultText.textContent = "You Won!" 
      playerScoreEl.textContent = playerScore
    } else {
      computerScore++
      resultText.textContent = "You Lost!"
      computerScoreEl.textContent = computerScore
    }
  }
}


// Generate random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = (Math.floor(Math.random() * 5)).toString()
  
  switch (computerChoiceNumber) {
    case '0':
      computerChoice = 'rock'
      computerRock.classList.add('selected')
      computerChoiceEl.textContent = ' --- Rock'
      break
    case '1':
      computerChoice = 'paper'
      computerPaper.classList.add('selected')
      computerChoiceEl.textContent = ' --- Paper'
      break
    case '2':
      computerChoice = 'scissors'
      computerScissors.classList.add('selected')
      computerChoiceEl.textContent = ' --- Scissors'
      break
    case '3':
      computerChoice = 'lizard'
      computerLizard.classList.add('selected')
      computerChoiceEl.textContent = ' --- Lizard'
      break
    case '4':
      computerChoice = 'spock'
      computerSpock.classList.add('selected')
      computerChoiceEl.textContent = ' --- Spock'
      break
    default:
      break
  }
}


// Call functions to process turn
function checkResult(playerChoice) {
  resetSelected()
  computerRandomChoice()
  updateScore(playerChoice)
}


// Pass player selection value and style icons
function select(playerChoice) {
  checkResult(playerChoice)

  // Add 'selected' styling & update playerChoiceEl
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Rock'
      break
    case 'paper':
      playerPaper.classList.add('selected')
      playerChoiceEl.textContent = ' --- Paper'
      break
    case 'scissors':
      playerScissors.classList.add('selected')
      playerChoiceEl.textContent = ' --- Scissors'
      break
    case 'lizard':
      playerLizard.classList.add('selected')
      playerChoiceEl.textContent = ' --- Lizard'
      break
    case 'spock':
      playerSpock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Spock'
      break
    default:
      break
  }
}
window.select = select





// On Load
resetAll()
startConfetti()