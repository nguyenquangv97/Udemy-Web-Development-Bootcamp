var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get('/', function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get('/bye', function(req, res){
    res.send("Good bye!");
});
// "/dog" => "MEOW!"
app.get('/dog', function(req, res){
    res.send("MEOW!");
});
// match any that comes in that has /r /anything
app.get("/r/:subredditName", (req, res) => {
    var subreddit = req.params.subredditName;
    res.send("WElCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title/", (req, res) => {
    res.send("welcome to the comment page!");
});

app.get('*', (req, res) => {
    res.send("You're a star");
});

// Tell Express to listen for request (Start server)

app.listen(9000, function(){
    console.log("Server started on port 9000");
});