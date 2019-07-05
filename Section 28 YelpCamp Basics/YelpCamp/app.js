// import express.js
var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Campground = require('./models/campground');
var Comment = require('./models/comment');
var seedDB = require("./seeds");
var app = express();


// connect to local database
mongoose.connect('mongodb+srv://nguyenquangv97:nguyenquang0206@cluster0-7jnzw.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to DB!');
}).catch(err => {
	console.log('ERROR:', err.message);
});
// use
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); // setting the view engine
app.use(express.static(__dirname + '/public'))
seedDB();

// create a campground

// landing page
app.get('/', (req, res) => {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get('/campgrounds', (req, res) => {
    // get all campgrounds from db
    Campground.find((err, allCampgrounds) =>{
        if(err) console.log(err);
        else{
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        } 
    });
});
// CREATE - add new campgrounds to DB
app.post('/campgrounds', (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {
        name: name,
        image: image,
        description: description
    };
    // create a new campgrounds and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// NEW - show form to create new campgrounds
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new')
});

// SHOW - show more infor about one campground
app.get('/campgrounds/:id', (req, res) => {
    // find the campground with provided ID
    Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) => {
        if(err){
            console.log(err);
        } else {
            res.render('campgrounds/show', {campground:foundCampground});
        }
    });
    // render show template with that campground
});

//==============
// Comment routes
//==============

app.get('/campgrounds/:id/comments/new', (req, res) => {
    // find campground by id
    Campground.findById(req.params.id, (err, campground) => {
        if(err){
            console.log(err);
        }
        res.render('comments/new', {campground:campground});
    })
});

app.post('/campgrounds/:id/comments/', (req, res) => {
    // look up campground using id
    Campground.findById(req.params.id, (err, campground) => {
        if(err){
            res.redirect('/campgrounds');
        } else {
            Comment.create(req.body.comment, (err, comment)=> {
                if(err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect(`/campgrounds/${campground._id}`);
                }
            });
        }
    })
    // create new comment
    // connect new comment to campground
    // redirect to campground show page

}); 


// start the server 
app.listen(9000, () => {
    console.log("YelpCamp server started on port: 9000");
});