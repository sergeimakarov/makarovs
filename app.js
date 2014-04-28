
//Framework
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

//Midellware confs for port connections and DB
var config = require('./confiq/index.js');

//EJS
var engine = require('ejs-locals'); 

//DB
var mongodb = require('mongodb');
var Item = require('./models/item').Item;
var mongoose = require('./lib/mongoose');

// all environments
app.engine('ejs', engine);
app.set('port', config.get('port'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

if (app.get('env')=='development'){
app.use(express.logger('dev'));
} else {
app.use(express.logger('default'));
}

//middleware

app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.cookieParser());

var MongoStore = require('connect-mongo')(express);
app.use(express.session({
secret: config.get('session:secret'),
key: config.get('session:key'),
cookie: config.get('session:cookie'),
store: new MongoStore({mongoose_connection: mongoose.connection})
}));

app.use(express.methodOverride());
app.use(app.router);
require('./routes').app;
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res, next){
res.render("frontpage")
});

app.get('/login', function(req, res, next){
res.render("login")
});


app.get('/info', function(req, res, next){
Item.find({}, function(err,result){
if (err){
throw err
}else{
res.render("info", {
data:result
})
}
})
});

//errorsHandlers

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(function(req,res){
res.send(404, "Page not found");
});



http.createServer(app).listen(config.get('port'), function(){
 console.log('Express server listening on port ' + config.get('port'));
});


