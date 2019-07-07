var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var Campground = require('./models/campground');
var Comment = require('./models/comment');
var seedDB = require('./seeds');
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local');
var methodOverride = require('method-override');
var User = require('./models/user');

// Requiring routes
var commentRoutes = require('./routes/comments');
var campgroundRoute = require('./routes/campgrounds');
var indexRoutes = require('./routes/index');

// connect to local database
//mongoose.connect('mongodb+srv://nguyenquangv97:nguyenquang0206@cluster0-7jnzw.mongodb.net/test?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost/yelp_camp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to DB!');
}).catch(err => {
  console.log('ERROR:', err.message);
});

// use
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // setting the view engine
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(flash());
// seed the database
//seedDB();

// passport configuration
app.use(require('express-session')({
  secret: 'Once again Rusty wins cutest dog!',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.local.success = req.flash('success');
  next();
});

app.use("/", indexRoutes);
app.use('/campgrounds', campgroundRoute);
app.use('/campgrounds/:id/comments', commentRoutes);

app.listen(9000, () => {
  console.log('YelpCamp server started on port: 9000');
});
