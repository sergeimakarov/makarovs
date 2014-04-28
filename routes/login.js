
var User = require('../models/user.js').User;
var async = require('async');
exports.get = function(req,res){
res.render('login');
};

exports.post = function(req, res, net){
var username = req.body.username;
var password = req.body.password;
};

async.waterfall([
function(callback){
User.findOne({username: username}, callback);
},
function(user, callback){
if (user){
if(user.checkPassword(password)){
callback(null, user);
}else{
function clientErrorHandler(err, req, res, next){
res.send(500, {error:'Password is not correct!'});
next(err);
}
}
} else {
var user = new User({username: username, password: password});
user.save(function(err){
if(err) return next(err);
callback(null, user);
});
}
}
], function(err, user){
if (err) return next(err);
req.session.user = user._id;
req.send({});
});
 
