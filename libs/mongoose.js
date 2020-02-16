var mongoose = require('mongoose');
var config = require('../config');
var log = require('../libs/log')(module);

mongoose.set('debug', true);

mongoose.connect(config.get('mongoose:uri:env:'+process.env.NODE_ENV), config.get('mongoose:options'));

// var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  log.info('-> mongoDB connected, base: ' + config.get('mongoose:uri:env:'+process.env.NODE_ENV));
});

module.exports = mongoose;