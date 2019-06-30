var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send("Hi there, welcome to my assignment!");
});

app.get('/speak/:animal', (req, res) => {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    };
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];

    res.send("The " + animal + "say '" + sound + "'");
});

app.get('/repeat/:phrase/:numRep', (req, res) => {
    var toClient = ""
    for(var i = 0; i < Number(req.params.numRep); i++) {
        toClient = toClient + req.params.phrase + ' ';  
    }
    res.send(toClient + " ");
});
app.get('*', (req, res) => {
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen("9000", ()=>{
    console.log("The server started at port 9000");
});