var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

// connect to local database
mongoose.connect('mongodb+srv://nguyenquangv97:nguyenquang0206@cluster0-7jnzw.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to DB!');
}).catch(err => {
	console.log('ERROR:', err.message);
});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); // setting the view engine

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// compile it into a model 
var Campground = mongoose.model("Campground", campgroundSchema);
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
            res.render("index", {campgrounds: allCampgrounds});
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
    res.render('new')
});

// SHOW - show more infor about one campground
app.get('/campgrounds/:id', (req, res) => {
    // find the campground with provided ID
    Campground.findById(req.params.id, (err, foundCampground) => {
        if(err){

        } else {
            res.render('show', {campground:foundCampground});
        }
    });

    // render show template with that campground
    
});

   
// start the server 
app.listen(9000, () => {
    console.log("YelpCamp server started on port: 9000");
});