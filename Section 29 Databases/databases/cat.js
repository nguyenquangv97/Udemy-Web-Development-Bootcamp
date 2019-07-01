var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

// adding a new cat to the DB
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mts. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save((err, cat) => {
//     if(err)
//         console.log("Something went wrong");
//     else
//         console.log("we just saved a cat to the db:" + cat); 
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, (err, cat) => {
    if(err){
        console.log("err");
    }
    else {
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one
Cat.find({}, (err, cats) => {
    if(err)
        console.log(err);
    else 
        console.log(cats);
});