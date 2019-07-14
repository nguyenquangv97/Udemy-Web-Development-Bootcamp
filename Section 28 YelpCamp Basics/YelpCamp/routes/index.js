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
      req.flash('error', err.message);
      return res.redirect('register');
    }
    passport.authenticate('local')(req, res, () => {
      req.flash('success', "Welcome to YelpCamp " + user.username);
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
  req.flash('success', "Logged you out!");
  res.redirect('/campgrounds');
});

module.exports = router;
