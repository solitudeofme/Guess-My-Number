'use strict';

//======================================= functions =======
function scoreCheck(score, message) {
    scoreText = score;
    if (score > 0) {
        messageText.textContent = message;
    } else {
        document.querySelector("body").style.backgroundColor = "red";
        messageText.textContent = "You Lost!!!";
        textColor("black");
        disabling();
    }
}

function textColor(color) {
    messageText.style.color = color;
}

function disabling() {
    secretNumText.textContent = secretNum;
    checkBtn.disabled = true;
    numberGuessText.disabled = true;

}

//===================================== status ============
let scoreText = document.querySelector('#score').textContent;
let secretNumText = document.querySelector('#secretNum');
let messageText = document.querySelector('#message');
let checkBtn = document.querySelector('.check-btn');
let numberGuessText = document.querySelector('#number-guess');
let secretNum = Math.trunc(Math.random() * 100) + 1;
let score = 100;
let highscore = 0;
let higherGuess = secretNum + 25;
let lowerGuess = secretNum - 25;
//====================================== Events ===========
checkBtn.addEventListener('click', function () {
    const guess = Number(document.querySelector('#number-guess').value);
    if (!guess) {
        messageText.textContent = "NO Number!";
    } else if (guess === secretNum) {
        messageText.textContent = "You Won!!!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        secretNumText.style.width = "5em";
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
    scoreText = score;
    secretNumText.textContent = "?";
    checkBtn.disabled = false;
    numberGuessText.disabled = false;
    document.querySelector("body").style.backgroundColor = "#222";
    secretNumText.style.width = "3em";
    messageText.textContent = "Start guessing...";
})