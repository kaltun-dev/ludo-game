'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting constions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


// rolling the dice functionality

btnRoll.addEventListener('click', function() {
    //generate a random dice roll
   const dice = Math.trunc(Math.random()*6) +1;

    // dislay the dice image
   diceEl.classList.remove('hidden');
   diceEl.src = `dice-${dice}.png`;

    //check for roll 1: if true switch to next player.


})



