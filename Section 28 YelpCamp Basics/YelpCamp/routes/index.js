var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

// landing page
router.get('/', (req, res) => {
  res.render('landing');
});

//=========
// AUTH ROUTES
// ========

// show register form
router.get('/register', (req, res) => {
  res.render('register');
});

// handle signup
router.post('/register', (req, res) => {
  var newUser = new User({
    username: req.body.username,
  });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.redirect('register');
    }

    passport.authenticate('local')(req, res, () => {
      res.redirect('/campgrounds');
    });
  });
});

// show login form
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/campgrounds',
  failureRedirect: '/login'
}), (req, res) => {
});

// logout
router.get('/logout', (req, res) => {
  req.logOut();
  req.flash('error', "Logged out out!");
  res.redirect('/campgrounds');
});

module.exports = router;
