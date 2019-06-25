//create secretNumber
var secretNumber = 4; 

//ask user for guess
var guess = prompt("Guess a number");
alert(guess + " is a " + typeof(guess));

if(Number(guess) === secretNumber){
    alert("You're Right!");
    alert(guess + " is a " + typeof(guess));

}else {
    alert("You're Wrong");
    alert(guess + " is a " + typeof(guess));
}