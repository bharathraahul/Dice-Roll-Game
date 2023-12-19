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

let playing = true;

const switchPlayer = function(){

    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer = activePlayer===0? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Rolling the dice
btnRoll.addEventListener('click',function()
{
    if(playing){
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
        //switching current score of player === 0 before switching
        switchPlayer();
    }

    }
    
})


btnHold.addEventListener('click',function(){

    if(playing){
    //adding current score to active player's score
    scores[activePlayer]+=currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    //check if score >=100
    if(scores[activePlayer]>=20){
        //finish the game
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    }else{


//Switch to the next player
    switchPlayer();
    }[]
    }
})