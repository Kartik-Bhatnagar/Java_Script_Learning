'use strict';
//query selector function
let p1 = prompt('Enter name of the player 1');
let p2 = prompt('Enter the name of the player2 ');
const qsClass = className => document.querySelector(`.${className}`);
const qsId = idName => document.querySelector(`#${idName}`);

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diePic = document.querySelector('.dice');
const player1 = qsClass('player--0');
const player2 = qsClass('player--1');
const playerN1 = qsId('name--0');
const playerN2 = qsId('name--1');
let activePlayer = player1; //initially the player 1 will be active

let deActivePlayer = player2;
const scoreP1Id = qsId('score--0');
const scoreP2Id = qsId('score--1');
const cScore1Id = qsId('current--0');
const cScore2Id = qsId('current--1');
let activeCurrScore = cScore1Id;
let deActiveCurrScore = cScore2Id;
let activeTotScore = scoreP1Id;

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let playerScore100;
//setting up the players name
playerN1.textContent = p1;
playerN2.textContent = p2;

//Resetting the Score
const resetScore = function (scoreObj) {
  scoreObj.textContent = 0;
};

resetScore(scoreP1Id);
resetScore(scoreP2Id);

//Hiding the dice
diePic.classList.add('hidden');

const generate_random_num = () => Math.trunc(Math.random() * 6) + 1;

const checkScore100 = function (scorePlayer) {
  if (scorePlayer >= 100) {
    activePlayer.classList.add('player--winner');
    gameOn = false;
    playerScore100 = activePlayer;
    console.log(playerScore100);
    diePic.classList.add('hidden');
    player2.classList.remove('player--active');
    player1.classList.remove('player--active');
  }
};
const actPlayer1 = function (addScore) {
  activeCurrScore = cScore2Id;
  deActiveCurrScore = cScore1Id;
  activeTotScore = scoreP2Id;
  scorePlayer1 += addScore;
  checkScore100(scorePlayer1);
  scoreP1Id.textContent = scorePlayer1;
  deActivePlayer = player1;
  activePlayer = player2;
};
const actPlayer2 = function (addScore) {
  console.log('active player 2');

  activeCurrScore = cScore1Id;
  deActiveCurrScore = cScore2Id;
  scorePlayer2 += addScore;
  checkScore100(scorePlayer2);
  scoreP2Id.textContent = scorePlayer2;
  activePlayer = player1;
  deActivePlayer = player2;
};

//displaying dice image with respect to the random number generated
let currScore = 0;
let gameOn = true;

const rollDie = function () {
  if (gameOn) {
    console.log('Clicked !! ROLL DIE');
    const dieNum = generate_random_num();
    diePic.src = `dice-${dieNum}.png`;
    if (diePic.classList.contains('hidden')) {
      //if dice is hidden then displaying the dice
      console.log('removed hidden');
      diePic.classList.remove('hidden');
    }
    //if totScore of active player reaches 100

    if (dieNum == 1) {
      //if 1 comes on die switch to next player

      if (activePlayer == player1) {
        actPlayer1(0);
      } else {
        actPlayer2(0);
      }
      currScore = 0;
      deActiveCurrScore.textContent = 0;
      deActivePlayer.classList.remove('player--active');
      activePlayer.classList.add('player--active');
    } else {
      // any other number than 1. will reflect in the score
      console.log(dieNum);
      currScore += dieNum;
      activeCurrScore.textContent = currScore;

      //activePlayer.children[2].children[1].textContent = currScore;
    }
  }
};

btnRoll.addEventListener('click', rollDie);

//hold event
//CUURENT SCORE GET Added
const holdScore = function () {
  if (gameOn) {
    if (activePlayer == player1) {
      actPlayer1(currScore);
    } else {
      actPlayer2(currScore);
    }
    currScore = 0;
    deActiveCurrScore.textContent = 0;
    deActivePlayer.classList.remove('player--active');
    activePlayer.classList.add('player--active');
  }
};
btnHold.addEventListener('click', holdScore);

//New Game

const restartGame = function () {
  if (!gameOn) {
    playerScore100.classList.remove('player--winner');
  }
  gameOn = true;
  activePlayer = player1;
  deActivePlayer = player2;
  activeCurrScore = cScore1Id;
  deActiveCurrScore = cScore2Id;
  activeTotScore = scoreP1Id;
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  scoreP2Id.textContent = 0;
  scoreP1Id.textContent = 0;
  cScore1Id.textContent = 0;
  cScore2Id.textContent = 0;
  currScore = 0;
};
btnNew.addEventListener('click', restartGame);
