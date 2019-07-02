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
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    Created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://images.unsplash.com/photo-1562077477-eb2409f73c49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
//     body: "Hello this is a blog post",
// });

// RESTFUL ROUTE    

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err) {
            console.log("err");
        } else {
            res.render('index', {blogs:blogs});
        }
    });

});

var port = process.env.PORT || 9000;
app.listen(port, ()=>{
    console.log("Server started on port " + port);
});