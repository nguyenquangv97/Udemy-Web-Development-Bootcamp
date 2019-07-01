var express = require("express");
var request = require('request');
app = express();
app.set("view engine", 'ejs');

app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
    var query = req.query.search;
    request(`http://www.omdbapi.com/?s=${query}&apikey=thewdb`, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render('results', {data: data});
        }
    });
});

app.listen(9000, () => {
    console.log('Movie App has started!!!');
});