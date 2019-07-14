// this is the constructor function
function person() {
  this.name = name;
}


// this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Persion("Colt");

Person.prototype.isInstructor = true;
elie.isInstructor; // true
colt.isInstructor; // true

// how were we able to access properties on the prototype?

// __proto__!
