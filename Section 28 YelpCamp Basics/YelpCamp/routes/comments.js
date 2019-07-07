var express = require('express');
var router = express.Router({ mergeParams: true });
var Campground = require('../models/campground');
var Comment = require('../models/comment');
var middleware = require('../middleware');

router.get('/new', middleware.isLoggedIn, (req, res) => {
  // find campground by id
  Campground.findById(req.params.id, (err, campground) => {
    if (err) {
      console.log(err);
    }
    res.render('comments/new', { campground: campground });
  });
});
// comments create
router.post('/', middleware.isLoggedIn, (req, res) => {
  // look up campground using id
  Campground.findById(req.params.id, (err, campground) => {
    if (err) {
      res.redirect('/campgrounds');
    } else {
      Comment.create(req.body.comment, (err, comment) => {
        if (err) {
          console.log(err);
        } else {
          // add username and id to comment
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          // save comment
          comment.save();
          campground.comments.push(comment);
          campground.save();
          res.redirect(`/campgrounds/${campground._id}`);
        }
      });
    }
  });
});

//==============//
// EDIT COMMENT //
//==============//

router.get('/:comment_id/edit', middleware.checkCommentOwnership, (req, res) => {
  Comment.findById(req.params.comment_id, (err, foundComment) => {
    if(err){
      res.redirect('back');
    } else {

      res.render('comments/edit', { campground_id : req.params.id, comment: foundComment });
    }
  });

});

//================//
// COMMENT UPDATE //
//================//

router.put('/:comment_id', middleware.checkCommentOwnership, (req, res) => {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, updatedComment) => {
    if(err){
      res.redirect('back');
    } else {
      res.redirect(`/campgrounds/${req.params.id}`);
    }
  });
});

//=================//
// COMMENT DESTROY //
//=================//

router.delete('/:comment_id', middleware.checkCommentOwnership, (req, res) => {
  //findByIdAndRemove
  Comment.findByIdAndRemove(req.params.comment_id, (err) => {
    if(err) {
      res.redirect('back');
    } else {
      res.redirect(`/campgrounds/${req.params.id}`);
    }
  });
});


module.exports = router;
