var mongoose = require('mongoose');
// connect to the database

mongoose.connect('mongodb+srv://nguyenquangv97:nguyenquang0206@cluster0-7jnzw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useFindAndModify: false
}).then(()=>{
    console.log("connected to database");
}).catch(err => {
    console.log("error: ", err.message);
});

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    name: String, 
    email: String,
    posts: [postSchema]
});

 var User = mongoose.model("User", userSchema);

// //make a new user
// var newUser = new User({
//     email: "nguyenquangred@gmail.com",
//     name: "Quang Nguyen 3"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "Just kidding. Go to potions class to learn it!"
// });


// newUser.save((err, user) =>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflection on Apple",
//     content: "They are delicious"
// });
 
// newPost.save((err, post)=> {
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(post);
//     }
// });
// find-------------
User.findOne({name: "Quang Nguyen 3"}, (err, user) => {
    if(err){
        console.log(err);
    }
    else {
        user.posts.push({
            title: "3 things i really hate",
            content: "Voldemort. Voldemort. Voldemort"
        });
        user.save((err, user) => {
            if(err){
                console.log(err);
            }
            else {
                console.log(user);
            }
        });
        
    }
});