// underscore.js 
// example of "this"

var comments = [];

comments.data = ["Good Job!", "Bye", "lame..."];

console.log(comments);

comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
    });
}

comments.print();
