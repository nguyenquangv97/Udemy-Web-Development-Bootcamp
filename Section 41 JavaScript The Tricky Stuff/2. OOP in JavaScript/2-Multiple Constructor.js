function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}
function Motorcyle(make, model, year) {
    Car.call(this, make, model, year);
    this.numWheels = 2;
}

function Motorcyle(make, model, year) {
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}

function Motorcyle(make, model, year) {
    Car.apply(this, arguments);
    this.numWheels = 2;
}
