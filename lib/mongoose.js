var mongoose = require('mongoose');
var config = require('../confiq/index.js');
mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;
