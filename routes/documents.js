var Document = require('../models/documents').Document;
var mongoose = require('../libs/mongoose');

exports.get = function(req, res){
  Document.find(function(err, documents){
    if (err) return console.error(err);
    res.send(documents);
  });
};

exports.post = function(req, res){
  var document = new Document(req.body['document']);
  document.save(function(err, document){
    if (err) return console.log(err);
    res.send(document);
  });
};