'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1');

const score0El =document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const current0El= document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

const scores=[0,0];
let currentScore=0;
let activePlayer=0;

//Rolling the dice
btnRoll.addEventListener('click',function()
{
    const dice = Math.trunc(Math.random() * 6 ) +1;
    
    //Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //add dice to total or switch player

    if(dice!==1){
        
        currentScore=currentScore+dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        //dont want to assign the score only to the first player
        //current0El.textContent=currentScore
    }
    else{
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        currentScore=0;
        activePlayer = activePlayer===0? 1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }





})