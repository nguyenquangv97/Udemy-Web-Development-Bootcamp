var person = function(){
    var name = "Quang";
    var age = "21";

    var personObj = {
        getName: function(){
            return name; 
        },
        getAge: function(){
            return age;
        }
    }
    return personObj;
}

var newPerson = person();
console.log(newPerson.getName() + " " + newPerson.getAge());


