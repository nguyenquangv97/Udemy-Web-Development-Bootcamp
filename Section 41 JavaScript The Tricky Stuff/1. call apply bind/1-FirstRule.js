// Introduction and Global
/*
1 - Global Context
*/

console.log(this); // window
function whatIsThis(){
  return this;
}

whatIsThis(); // window

function variablesInThis(){
  // since the value of this is the window
  // all we are doing here is creating a global variable
  this.person = "Elie";
}

console.log(person); // Elie

// example
var dog = "rusty";
function makePerson(){
  var person = "colt";
}
// do not have access to person because it is inside the
// function and we're not returning it

// example of mistake
function mistake() {
  this.badIdea = "oops";
}
// if you use "use strict"
// the value of 'this' inside the function is undefined, not global.
