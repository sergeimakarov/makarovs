var mongoose = require('../lib/mongoose');
var validate = require('mongoose-validator').validate;
var Schema = mongoose.Schema;

var validateLength = [validate({message:"The length of barcode schould be no more and no less than 14 characters!"},'len', 14,14)];

var schema = new Schema ({
barcode:{
type:Number,
required:true,
validate:validateLength
},
description:{
type:String,
required:true
},
price:{
type:Number,
required:true
},
shop:{
type:String,
required:true,
uppercase:true
},
street:{
type:String,
required:true
}
});
/*
schema.path('barcode').validate(function(num){
return num.length == 13;
},'sorry, you have to type no less and no more than 14 characters!');
schema.path('price').validate(function(price){
return price + " rubs";
},'my error type');
*/
console.log('good');
exports.Item = mongoose.model('Item', schema);

