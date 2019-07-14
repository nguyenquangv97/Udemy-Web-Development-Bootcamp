function Person(name) {
  this.name = name;
}
// this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");
// since we used the new keyword, we have established
// a link between the object and the prototype property
// we can access that using __proto__
elie.__proto__ === Person.prototype;  // true
colt.__proto__ === Person.prototype;  // true
Person.prototype.constructor === Person; // true
