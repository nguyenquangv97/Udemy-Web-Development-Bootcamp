function classRoom(){
    var instructors = ["Colt", "Elie"];
    return {
        getInstructors: function(){
            return instructors;
        },
        addInstructor: function(instructor){
            instructors.push(instructor);
            return instructors;
        }
    }
}

var course1 = classRoom();
console.log(course1.getInstructors()); 
console.log(course1.addInstructor("Ian"));
console.log(course1.getInstructors()); 

var course2 = classRoom();
console.log(course2.getInstructors()); 