'use strict';

let number = Math.trunc(Math.random()*20+1);
let score = 5;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) //when no input
    {
        document.querySelector('.message').textContent = 'Please enter a Number';
    }
    else if(guess === number) //when player wins
    {
        if(highscore < score) 
        {
            highscore = score;
        }
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        
    } 
    else if( guess!== number ) //When player is not correct
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = 
            guess > number ? "Too High" : "Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = 'You Lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }});
    // when player hits Again button
   document.querySelector('.again').addEventListener('click', function(){
       number = Math.trunc(Math.random()*20+1);
       score = 5;
       document.querySelector('.score').textContent = score;
       document.querySelector('.guess').value = '';
       document.querySelector('.message').textContent = 'start guessing...';
       document.querySelector('.number').style.width = '15rem';
       document.querySelector('.number').textContent = '?';
       document.querySelector('body').style.backgroundColor = '#222';
   });
 

