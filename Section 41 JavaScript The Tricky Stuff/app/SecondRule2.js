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

console.log(person.dog.sayHello());