var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // ad click listener to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = color;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}
function changeColor(color){
    // loop though all squares
    // change each color to match given color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // add num random colors to arr
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that arr
    return arr;

}
function randomColor(){
    // pick a red from 0 to 255
    var red = Math.floor(Math.random() * 256); 
    // pick a green from 0 to 255
    var green = Math.floor(Math.random() * 256); 
    // pick a blue from 0 to 255
    var blue = Math.floor(Math.random() * 256); 
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}