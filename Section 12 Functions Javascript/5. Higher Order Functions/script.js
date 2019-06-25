// set Interval 

function sing(){
    console.log("twinkle twinkle...");
    console.log("how i wonder...");
}
sing();

var ID = setInterval(sing, 1000);

clearInterval(ID);

// anonymous function
setInterval(function(){
    console.log("I am an anonymous function!");
    console.log("This is awesome!");
}, 2000);