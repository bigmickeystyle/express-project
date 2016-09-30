var express = require('express');
var app = express();
var originalurl;
const projectspage = require('./projectspage.js');


app.use(function logUrl(req, res, next) {
    res.set('Cache-control', 'no-cache');
    console.log('requesting: ' + req.url);
    next();
});

app.use(require('body-parser').urlencoded({
    extended: false
}));

app.use(require('cookie-parser')());

app.get('/cookie', function(req, res){
    res.sendFile(__dirname + '/cookie/cookie.html');
});

app.get(/\w+/, function(req, res, next) {
    if(req.cookies.name != 'yes' && req.url != '/cookie'){
        console.log('redirecting');
        originalurl = req.url;
        res.redirect(301, '/cookie');
    }
    else {
        next();
    }
});

app.post('/cookie', function(req, res) {
    if (req.body.confirm == 'cookie'){
        res.cookie('name', 'yes');
        res.redirect(301, originalurl);
    }
    else{
        res.send('<!doctype html><title>DENIED</title><p>Please accept our cookies, otherwise you cannot proceed</html>');
    }
});

app.get('/', function(req, res){
    res.send(projectspage.Page);
});

app.use(express.static(__dirname + '/projects'));

app.listen(8080);
