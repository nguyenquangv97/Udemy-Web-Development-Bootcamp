var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var app = express();


// connect 
mongoose.connect("mongodb+srv://nguyenquangv97:nguyenquang0206@cluster0-7jnzw.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true
});
// app config
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
// mongoose / model config
var blogSchema = new mpngoose.Schema({
    title: String,
    image: String,
    body: String,
    Created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// restful outes
app.get('/', (req, res) => {
    res.send("<h1>TESTING</h1>");
});

var port = process.env.PORT || 9000;
app.listen(port, ()=>{
    console.log("Server started on port " + port);
});