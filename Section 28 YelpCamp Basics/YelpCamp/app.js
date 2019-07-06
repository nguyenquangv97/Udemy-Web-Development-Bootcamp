var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Campground = require('./models/campground');
var Comment = require('./models/comment');
var seedDB = require("./seeds");
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('./models/user');

var commentRoutes = require('./routes/comments');
var campgroundRoute = require('./routes/campgrounds');
var indexRoutes = require('./routes/index');



// connect to local database
//mongoose.connect('mongodb+srv://nguyenquangv97:nguyenquang0206@cluster0-7jnzw.mongodb.net/test?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost/yelp_camp', {
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

// passport configuration
app.use(require('express-session')({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    console.log(res.locals.currentUser);
    next();
});

app.use(indexRoutes);
app.use(commentRoutes);
app.use(campgroundRoute);




// start the server 
app.listen(9000, () => {
    console.log("YelpCamp server started on port: 9000");
});