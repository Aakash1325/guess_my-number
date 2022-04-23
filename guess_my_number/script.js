'use strict';

// document.querySelector('.message').textContent = 'Correct Number🎉'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value)

// document.querySelector('.guess').value = 46;
// console.log(document.querySelector('.guess').value)


let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);

let highscore = 0;
let score = 20;






// check button funtionality  


document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {

        document.querySelector('.message').textContent = '🤬 No number ';

    // when secret Number is greater than guess 
    } else if(guess < secretNumber) {
        if(score <= 0) {score = 0} else {score--;}
        let currentScore = score;
        if(currentScore != 0) {
            document.querySelector('.message').textContent = '📉 Too low';
            document.querySelector('.score').textContent = score;
            // console.log(score)

        } else if(currentScore == 0) {
            score = 0;
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('body').style.backgroundColor = '#8B0000'
            document.querySelector('.score').textContent = score;
        }

    // when secret Number is less than guess
    } else if(guess > secretNumber) {
        if(score <= 0) {score = 0} else {score-- ;} 
        let currentScore = score;
        if(currentScore != 0) {
            // score--;
            document.querySelector('.message').textContent = '📈 Too high';
            document.querySelector('.score').textContent = score;

        } else if(currentScore == 0) {
            score = 0
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('body').style.backgroundColor = '#8B0000'
            document.querySelector('.score').textContent = score;
        }

    //  when secret Number is equal to guess( or when someone won the game )
    } else if (guess === secretNumber) {
        // highscore = score;
        if(highscore < score) { highscore = score; }
        document.querySelector('.message').textContent = '🥳 Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        
    }
});


// Again button functionality  


document.querySelector('.again').addEventListener('click' , function() {

    secretNumber = Math.trunc(Math.random()*20) + 1;
    // console.log(secretNumber);
    score = 20;

    document.querySelector('.message').textContent = 'Start Guessing...'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});
