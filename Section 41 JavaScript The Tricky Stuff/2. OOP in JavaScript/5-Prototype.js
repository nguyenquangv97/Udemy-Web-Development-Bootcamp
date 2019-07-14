function Person(name) {
  this.name = name;
  this.sayHi = function(){
    return "Hi " + this.name;
  };
}

elie = new Person("Elie");
elie.sayHi(); // Hi Elie

// now this code works, but it is ineefficient
// every time we make an object using the new keyword we have to redefine this function
// but its the same for everyone! Let's put it on the prototype instead!

function Person(name){
  this.name = name;
}
Person.prototype.sayHi = function(){
  return "Hi " + this.name;
};

elie = new Person("Elie");
elie.sayHi(); // Hi Elie


// exercise
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}
Vehical.prototype.turnOn = function(){
  this.isRunning = true;
};
Vehical.prototype.turnOff = function(){
  this.isRunning = false;
};
Vehicle.prototype.honk = function(){
  if(this.isRunning){
    return "beep";
  }
};
