var { Model } = require("../models/userModel.js");

var findAll = function (user, callbacks) {
  Model.find(user).exec(callbacks);
};
var creatone = function (username, password, callbacks) {
  const user = new Model({
    username: username,
    password: password,
    role: "register",
    attempt: true
  });
  user.save(callbacks);
};
module.exports.findAll = findAll;
module.exports.creatone = creatone;
