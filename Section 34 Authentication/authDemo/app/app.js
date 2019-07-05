var express = require("express");
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var User = require('./models/user')
//=============================
mongoose.connect("mongodb://localhost/auth_demo_app", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true
});
//=============================
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=============================
// routes


app.get('/', (req, res)=>{
    res.render("home");
});

app.get('/secret', isLoggedIn, (req, res)=>{
    res.render('secret');
});

app.get('/register', (req, res) => {
    res.render('register');
});
app.post('/register', (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, ()=>{
            res.redirect('/secret');
        });

    });
});

// LOGIN ROUTES
// render login form
app.get('/login', (req, res) => {
    res.render('login');
});

// login logic
app.post('/login', passport.authenticate('local', {
    successRedirect:'/secret',
    failureRedirect:'/login'
}), (req, res) => {

});

// logout route
app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login')
}

// start server 
//=============================

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
