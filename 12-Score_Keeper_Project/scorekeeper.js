var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5 ;

function p1ButtonEvent(){

    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
}

function p2ButtonEvent(){

    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }

}

function resetEvent(){

    reset();
}

function reset(){

    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    numInput.textContent = 0;
    gameOver = false;
}

function inputEvent(){

    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
}


p1Button.addEventListener("click", p1ButtonEvent);
p2Button.addEventListener("click", p2ButtonEvent);
resetButton.addEventListener("click", resetEvent);
numInput.addEventListener("change", inputEvent);
