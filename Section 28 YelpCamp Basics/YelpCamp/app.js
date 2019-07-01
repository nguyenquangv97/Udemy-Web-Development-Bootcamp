// import express.js
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var campgrounds = [
    {
        name: "campGround1",
        image: "https://pixabay.com/get/57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c732e72d5904ec25a_340.jpg"
    },
    {
        name: "campGround1",
        image: "https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c732e72d5904ec25a_340.jpg"
    }
];


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); // setting the view engine


// landing page
app.get('/', (req, res) => {
    res.render("landing");
});

// camp ground
app.get('/campgrounds', (req, res) => {

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new')
});

// start the server 
app.listen(9000, () => {
    console.log("YelpCamp server started on port: 9000");
});