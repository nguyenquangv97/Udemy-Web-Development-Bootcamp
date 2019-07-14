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

var elieCalc = colt.addNumbers.bind(elie, 1, 2, 3, 4); // function() {}...
elieCalc();

var elieCalc2 = colt.addNumbers.bind(elie, 1, 2); // function() {}...
elieCalc2(3, 4);  // Elie just  calculate 10
