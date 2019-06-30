var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    //res.send("<h1>Welcome to the home page!</h1>");
    res.render("home");
});

app.get('/fallinlovewith/:thing', (req, res) => {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.listen(9000, () => {
    console.log("Server is listening!!!");
});