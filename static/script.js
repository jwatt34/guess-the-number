'use strict';

let number = Math.trunc(Math.random() * 19) + 1;
let score = 20;
let highscore = 0;
//change the displayed message
const updateMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1){
    //blank guess
    if (!guess){
      updateMessage('😒 Please Guess a Number');
    }
    //guess is incorrect
    else if (guess != number){
      score --;
      let message = guess > number ? 'Too High, Guess Again' : "Too Low, Guess Again";
      updateMessage(message);
      document.querySelector('.score').textContent = score;
    }
      //guess is correct
    else{
      updateMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = number;
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      }
    }
    //score reaches 0
    else{
      updateMessage('You lose');
    }
})

document.querySelector('.again').addEventListener('click', function(){
  number = Math.trunc(Math.random() * 20);
  score = 20;
  console.log(`answer = ${number}`);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  updateMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.score').textContent = score;
})
