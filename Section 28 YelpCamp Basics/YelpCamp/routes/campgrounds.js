var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');
var middleware = require('../middleware');

// INDEX - show all campgrounds
router.get('/', (req, res) => {
  // get all campgrounds from db
  Campground.find((err, allCampgrounds) => {
    if (err) console.log(err);
    else {
      res.render('campgrounds/index', {campgrounds: allCampgrounds });
    }
  });
});
// CREATE - add new campgrounds to DB
router.post('/', middleware.isLoggedIn, (req, res) => {
  var name = req.body.name;
  var price = req.body.price;
  var image = req.body.image;
  var description = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username,
  };
  var newCampground = {
    name: name,
    price: price,
    image: image,
    description: description,
    author: author
  };
  // create a new campgrounds and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      // redirect back to campgrounds page
      res.redirect('/campgrounds');
    }
  });
});

// NEW - show form to create new campgrounds
router.get('/new', middleware.isLoggedIn, (req, res) => {
  res.render('campgrounds/new');
});

// SHOW - show more infor about one campground
router.get('/:id', (req, res) => {
  // find the campground with provided ID
  Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) => {
    if (err) {
      console.log(err);
    } else {
      res.render('campgrounds/show', {
        campground: foundCampground
      });
    }
  });
});

//=======================//
// EDIT CAMPGROUND ROUTE //
//=======================//
router.get('/:id/edit', middleware.checkCampgroundOwnership, (req, res) => {
  // is user logged in
  Campground.findById(req.params.id, (err, foundCampground) => {
    res.render('campgrounds/edit', { campground: foundCampground });
  });
});

//=========================//
// UPDATE CAMPGROUND ROUTE //
//=========================//

router.put('/:id', middleware.checkCampgroundOwnership,(req, res) => {
  // find an update correct campgrounds
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, updatedCampground) => {
    if (err) {
      res.redirect('/campgrounds');
    } else {
      res.redirect(`/campgrounds/${req.params.id}`);
    }
  });
});

//==========================//
// DESTROY CAMPGROUND ROUTE //
//==========================//

router.delete('/:id', middleware.checkCampgroundOwnership, (req, res) => {
  Campground.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.redirect('/campgrounds');
    } else {
      res.redirect('/campgrounds');
    }
  });
});

module.exports = router;
