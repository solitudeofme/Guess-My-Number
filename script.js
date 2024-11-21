'use strict';

function scoreCheck(score, message) {
    document.querySelector('#score').textContent = score;
    if (score > 0) {
        document.querySelector('#message').textContent = message;
    } else {
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector('#message').textContent = "You Lost!!!";
        textColor("black");
        disabling();
    }
}
function textColor(color){
    document.querySelector('#message').style.color = color;
}
function disabling(){
        document.querySelector('#secret-num').textContent = secretNum;
        document.querySelector('.check-btn').disabled = true;
        document.querySelector('#number-guess').disabled = true;

}
let secretNum = Math.trunc(Math.random() * 100) + 1;
let score = 100;
let  highscore = 0;
let higherGuess = secretNum + 25;
let lowerGuess = secretNum - 25;
document.querySelector('.check-btn').addEventListener('click', function () {
    const guess = Number(document.querySelector('#number-guess').value);
    if (!guess) {
        document.querySelector('#message').textContent = "NO Number!";
    } else if (guess === secretNum) {
        document.querySelector('#message').textContent = "You Won!!!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector('#secret-num').style.width = "5em";
       if (score > highscore) {
          highscore = score;
           document.querySelector('#highscore').textContent = highscore;
       }
        textColor("green");

    } else if (guess < lowerGuess) {
        textColor("blue");
        score -= 10;
        scoreCheck(score, "Too Low!!")
    } else if (guess > higherGuess) {
        textColor("blue");
        score -= 10;
        scoreCheck(score, "Too High!!")
    } else if (guess > secretNum && guess < higherGuess) {
        textColor("orange");
        score -= 10;
        scoreCheck(score, "Lower!!")
    } else if (guess < secretNum && guess > lowerGuess) {
        textColor("orange");
        score -= 10;
        scoreCheck(score, "Higher!!")
    }
})
document.querySelector('.again-btn').addEventListener('click', function () {
    score = 100;
    secretNum = Math.trunc(Math.random() * 100) + 1;
    higherGuess = secretNum + 25;
    lowerGuess = secretNum - 25;
    textColor("white");
    document.querySelector('#score').textContent = score;
    document.querySelector('#secret-num').textContent = "?";
    document.querySelector('.check-btn').disabled = false;
    document.querySelector('#number-guess').disabled = false;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('#secret-num').style.width = "3em";
    document.querySelector('#message').textContent = "Start guessing...";
})