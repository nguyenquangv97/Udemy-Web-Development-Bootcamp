var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span")
var winningScore = 5; 
var gameOver = false;
// calculate and display score for player one

var p1Score = 0;
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true; 
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
});

// calculate and display score for player two
var p2Score = 0;
p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true; 
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;

    }
});

// reset game 
resetButton.addEventListener("click", reset);
function reset(){
    gameOver = false;
    p1Score = 0; 
    p2Score = 0; 
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

// calculate the maximum point
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})