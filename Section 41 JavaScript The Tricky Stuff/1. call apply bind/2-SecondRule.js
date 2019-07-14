// Implicit/Object
// when the keyword 'this' is inside of a declared Object
var person = {
  firstName: "Elie",
  sayHi: function(){
    return "Hi" + this.firstName;
  },
  determineContext: function(){
    return this === person;
  }
};
console.log(person.determineContext());
