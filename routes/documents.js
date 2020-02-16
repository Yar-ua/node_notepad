var Document = require('../models/models').Document;

var mongoose = require('../libs/mongoose');

exports.get = function(req, res){
  Document.find(function(err, documents){
    if (err) return console.error(err);
    res.send(documents);
  });
};

