function House(bedrooms, bathrooms, numSqft){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}


var firstHouse = new House(2, 2, 1000);
var numBedrooms = firstHouse.bedrooms; // 2
var numBathrooms = firstHouse.bathrooms; // 2
var numSqft = firstHouse.numSqft; // 2



function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function(){
    console.log(this.name +  "just barked!");
  };
}


var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);

rusty.bark();
fido.bark();
