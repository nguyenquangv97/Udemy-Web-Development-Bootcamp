var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");
while(input !== "quit"){
    if(input === "list"){
        todos.forEach(function(items, index){
            console.log(index + ": " + items);
        })
    }
    else if(input === "new"){
        var newTodo = prompt("Enter new todo")
        todos.push(newTodo);
    }
    else if(input === "delete"){
        var index = prompt("Enter index of todo to delete: ");
        todos.splice(index, 1);
    }

    input = prompt("What would you like to do?");
}
console.log("OK");