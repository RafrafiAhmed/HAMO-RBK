var mongoose = require("mongoose");

var schema = mongoose.Schema({
  username: String,

  password: String,
  role: String,
  attempt: Boolean
});

var Model = mongoose.model("user", schema);

module.exports.Model = Model;
