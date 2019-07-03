var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var expressSanitizer = require('express-sanitizer');
var methodOverride = require('method-override');
var app = express();


// connect 
mongoose.connect("mongodb+srv://nguyenquangv97:nguyenquang0206@cluster0-7jnzw.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});
// app config
app.set('view engine', 'ejs');
app.use(methodOverride("_method"));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());

// mongoose / model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

// RESTFUL ROUTE    
// home
app.get('/', (req, res) => {
    res.redirect('/blogs');
});
// index
app.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err) {
            console.log("err");
        } else {
            res.render('index', {blogs:blogs});
        }
    });
});
// NEW ROUTE
app.get('/blogs/new', (req, res) => {
    res.render('new');
});
// CREATE ROUTE
app.post('/blogs', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, (err, newBlog) => {
        if(err) {
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    });
});

//SHOW ROUTE
app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if(err){
            res.redirect('/blogs');
        }
        else {
            res.render('show', {blog: foundBlog});
        }
    });
});
// EDIT ROUTE
app.get('/blogs/:id/edit', (req, res)=>{
    Blog.findById(req.params.id, (err, foundBlog)=>{
        if(err){
            res.redirect('/blogs')
        }
        else {
            res.render('edit', {blog:foundBlog});
        }
    });
});

// UPDATE ROUTE
app.put('/blogs/:id', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if(err){
            res.redirect("/blogs");
        }
        else {
            res.redirect(`/blogs/${req.params.id}`)
        }
    });
});

// DELETE ROUTE
app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndRemove(req.params.id, (err)=> {
        if(err) {
            res.redirect('/blogs');
        }
        else {
            res.redirect('/blogs');
        }
    });
});


var port = process.env.PORT || 9000;
app.listen(port, ()=>{
    console.log("Server started on port " + port);
});