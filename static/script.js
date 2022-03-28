'use strict';

let number = Math.trunc(Math.random() * 19) + 1;
let score = 20;
let highscore = 0;
console.log(number)

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score > 1){
    //blank guess
    if (!guess){
      document.querySelector('.message').textContent = '😒 Please Guess a Number';
    }
    //guess is incorrect
    else if (guess != number){
      score --;
      let message = guess > number ? 'Too High, Guess Again' : "Too Low, Guess Again";
      document.querySelector('.message').textContent = `${message}`;
      document.querySelector('.score').textContent = score;
    }
      //guess is correct
    else{
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = number;
      document.querySelector('.number').style.width = '30rem'
      if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      }
    }
    //score reaches 0
    else{
      document.querySelector('.message').textContent = 'You lose'
    }
})

document.querySelector('.again').addEventListener('click', function(){
  number = Math.trunc(Math.random() * 20)
  score = 20;
  console.log(`answer = ${number}`);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.score').textContent = score;
})
