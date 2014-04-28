exports.get = function(req, res){
res.render('login');
};

export.post = function(req,res,next){
var barcode = req.body.barcode;

Item.findOne({barcode:barcode}, function(err, item){
if(item){
