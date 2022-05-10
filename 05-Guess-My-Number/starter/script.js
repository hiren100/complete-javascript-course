'use strict';




let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = (message) =>{
  return document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  if(!guess){
   displayMessage("No number!")
  }else if (guess === secretNumber ){

    displayMessage("Correct number!");
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      console.log(highscore)
      document.querySelector('.highscore').textContent = highscore;
    }

  }else if(guess > secretNumber){

    if(score > 1){
      displayMessage("Number is high!");
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      displayMessage("You lost the game!");
      document.querySelector('.score').textContent = 0;
    }

  }else if(guess < secretNumber){

    if(score > 1){
      displayMessage("Number is low!");
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      displayMessage("You lost the game!");
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('body').style.backgroundColor = "#222";
  }

})

document.querySelector('.again').addEventListener('click', function() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('body').style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = "?";
})