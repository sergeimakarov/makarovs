var nconf = require('nconf');
var path = require('path');

nconf.argv()
.env()
.file({file:path.join(__dirname, 'confiq.json')});

module.exports = nconf;