var mongodb = require('mongodb');
var express = require('express');
var http = require('http');
var path = require('path');
var confiq = require('./confiq/index.js');
var app = express();
var engine = require('ejs-locals');

// all environments
app.engine('ejs', engine);

app.set('port', confiq.get('port'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middleware

if (app.get('env')=='development'){
app.use(express.logger('dev'));
} else {
app.use(express.logger('default'));
}

app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + 'public'));

app.get('/', function(req, res, next){
res.render("index")
});

app.get('/item_new', function(req, res, next){
res.render("item_new")
});

app.get('/item_exists', function(req, res, next){
res.render("item_exists")
});

app.use(function(req, res, next){
if(req.url=='/forbidden'){
next(new Error("!"));
} else {
next();
}
});

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(function(req,res){
res.send(404, "Page not found");
});



http.createServer(app).listen(confiq.get('port'), function(){
 console.log('Express server listening on port ' + confiq.get('port'));
});


