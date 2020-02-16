var mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;

var documentSchema = new Schema({
  title: { type: [String], index: true },
  data: String,
  tags: String
});

exports.Document = mongoose.model('Document', documentSchema);