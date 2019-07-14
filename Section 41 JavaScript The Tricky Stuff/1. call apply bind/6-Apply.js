/*
It's almost identical to call - except the parameters!
*/

var colt = {
  firstName: "Colt",
  sayHi: function() {
    return "Hi " + this.firstName;
  },
  addNumbers: function(){
    return this.firstName + " just calculated " + (a+b+c+d);
  }
};

var elie = {
  firstName: "Elie"
};

colt.sayHi(); // "Hi Colt"
colt.sayHi.apply(elie); // "Hi Elie"

// well this seems the same....but what happens when we start adding arguments?

colt.addNumbers(1,2,3,4); // Colt just calculated 10
colt.addNumbers.call(elie, 1, 2, 3, 4); // Elie just calculated 10
colt.addNumbers.call(elie, [1, 2, 3, 4]); // Elie just calculated 10
