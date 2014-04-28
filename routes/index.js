var User = require('../models/user').User;
module.exports = function(app){

app.get('/', function(req, res, next){
res.render('index');
});
app.get('/login', require('./login').get);
app.post('/login', require('./login').post);

app.get('/users', function(req, res, next){
User.find({}, function(err, users){
if (err) return next(err);
res.json(users);
})
});

};