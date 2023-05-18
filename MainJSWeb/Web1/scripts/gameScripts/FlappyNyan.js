var gameContainer = document.getElementById("game-container");
var bird = document.getElementById("bird");
var pipe = document.getElementById("pipe");
var restartBtn = document.getElementById("restart-btn");
var gameTimer;
var gravity = 2;
var pipeSpeed = 10;
var birdJump = 40;
var birdTop = 200;
var pipeLeft = 400;

restartBtn.addEventListener("click", restartGame);
function startGame() {
    gameTimer = setInterval(move, 20);
    window.addEventListener("mousedown", jump);
}

function move() {
    birdTop += gravity;
    bird.style.top = birdTop + "px";
    pipeLeft -= pipeSpeed;
    pipe.style.left = pipeLeft + "px";

    if (pipeLeft < -80) {
        pipeLeft = gameContainer.offsetWidth;
    }

    if (birdTop > gameContainer.offsetHeight || collisionCheck()) {
        gameOver();
    }
}

function jump() {
    birdTop -= birdJump;
}

function collisionCheck() {
    var birdRect = bird.getBoundingClientRect();
    var pipeRect = pipe.getBoundingClientRect();

    return (
        birdRect.top < pipeRect.bottom &&
        birdRect.bottom > pipeRect.top &&
        birdRect.right > pipeRect.left &&
        birdRect.left < pipeRect.right
    );
}

function gameOver() {
    clearInterval(gameTimer);
    window.removeEventListener("mousedown", jump);
    alert("Game Over!");
}

function restartGame() {
    birdTop = 200;
    pipeLeft = 400;
    pipeLeft = gameContainer.offsetWidth;
    bird.style.top = birdTop + "px";
    pipe.style.left = pipeLeft + "px";
    startGame();
}
