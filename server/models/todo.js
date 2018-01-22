// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var todoSchema = new Schema({
  desc: String,
  isCompleted: {type: Boolean, default: false},
  created_at: {type: Number, default: Date.now},
  updated_at: {type: Number, default: Date.now}
});

// the schema is useless so far
// we need to create a model using it
var ToDo = mongoose.model('ToDo', todoSchema);

// make this available to our users in our Node applications
module.exports = ToDo;