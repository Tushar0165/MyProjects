'use strict';

let randNumber = Math.floor((Math.random() * 20) + 1);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
    const vari = Number(document.querySelector('.guess').value);
    if (!vari) {
        document.querySelector('.message').textContent = ' No Number';
    }
    else if (randNumber > vari && score > 0) {
        document.querySelector('.message').textContent = 'Try a higher number';
        score--;
    }
    else if (vari > randNumber && score > 0) {
        document.querySelector('.message').textContent = 'Try a lower number';
        score--;
    }
    else if (vari === randNumber) {
        if (score > highScore) {
            highScore = score;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = randNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = 'Correct Answer';
    }
    if (score == 0) {
        document.querySelector('.message').textContent = 'You lost the game';

        document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
    randNumber = Math.floor((Math.random() * 20) + 1);
    document.querySelector('.score').textContent = '20';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';

});

// const randNumber= Math.floor((Math.random() * 20) + 1);