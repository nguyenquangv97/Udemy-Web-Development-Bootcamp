var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get('/', function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
// "/dog" => "MEOW!"


// Tell Express to listen for request (Start server)

app.listen(9000, function(){
    console.log("Server started on port 9000");
});