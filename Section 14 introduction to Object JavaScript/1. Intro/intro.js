var dog = {
    name: "Rusty",
    breed: "Mutt",
    age: 3
}

// console.log(dog["age"]);
// console.log(dog.age);

// hiding variable

function createPerson(){
    var name = "Quang";
    var age =  21;

    var personObj = {
        getName: function(){
            return name;
        },
        setName: function(newName){
            name = newName;
        }
    }
    return personObj;
}

var personObject = createPerson();

console.log(personObject.getName());