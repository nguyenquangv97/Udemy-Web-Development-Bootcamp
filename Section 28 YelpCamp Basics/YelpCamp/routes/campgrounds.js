var express = require('express');
var router = express.Router();

// INDEX - show all campgrounds
router.get('/campgrounds', (req, res) => {
    // get all campgrounds from db
    console.log(req.user);
    Campground.find((err, allCampgrounds) =>{
        if(err) console.log(err);
        else{
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
        } 
    });
});
// CREATE - add new campgrounds to DB
router.post('/campgrounds', (req, res) => {
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
router.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new')
});

// SHOW - show more infor about one campground
router.get('/campgrounds/:id', (req, res) => {
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



module.exports = router;