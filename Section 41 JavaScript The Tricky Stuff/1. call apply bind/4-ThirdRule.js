/*
3 - Explicit Binding
choose what we want the context of 'this' to be
using call, apply, or bind

call, apply, and bind are methods that can only be used by functions
=====================================================================
| name of method    parameters                  invoke immediately? |
=====================================================================
| call              thisArg, a,b,c,d,...        Yes                 |
| apply             thisArg, [a,b,c,d,...]      Yes                 |
| bind              thisArg, a,b,c,d,...        No                  |
=====================================================================
*/

var person = {
  firstName: "Colt",
  sayhi: function(){
    return "Hi" + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function(){
      return "Hello " + this.firstName;
    },
    determineContext: function() {
      return this === person;
    }
  }
};

person.sayhi(); // "Hi Colt"
person.determineContext(); // true

person.dog.sayHello.call(person); // "Hello Colt"
person.dog.determineContext().call(person); // true
