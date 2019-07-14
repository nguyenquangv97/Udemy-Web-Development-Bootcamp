var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
};

var elie = {
  // Look at all this duplication :(
  firstName: "Elie",
};

colt.sayHi();
elie.sayHi.call(colt);
