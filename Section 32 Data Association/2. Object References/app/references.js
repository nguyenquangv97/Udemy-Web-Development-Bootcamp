var mongoose = require('mongoose');
// connect to the database

//mongoose.connect('mongodb+srv://nguyenquangv97:nguyenquang0206@cluster0-7jnzw.mongodb.net/test?retryWrites=true&w=majority', {
mongoose.connect('mongodb://localhost/blog_demo_2', {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useFindAndModify: false
}).then(()=>{
    console.log("connected to database");
}).catch(err => {
    console.log("error: ", err.message);
});

var Post = require("./models/post")

var User = require("./models/user");
// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// create the post, when it returns the post, find the user with the given email
// then add this post to the user's posts
Post.create({
    title: "How to cook the best burger pt. 4",
    content: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
}, (err, post) => {
    User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
        if(err) {
            console.log(err);
        }
        else {
            foundUser.posts.push(post);
            foundUser.save((err, user) => {
                if(err){
                    console.log(err);
                }
                else {
                    console.log(user);
                }
            });
        }
    });
});

// ---------------------------------------------

// find user
// find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });