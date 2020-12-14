var express = require("express");
var { findAll, creatone } = require("../../DB/controler/userControle.js");

var router = express.Router();

router.route("/").get(function (req, res) {
  findAll({}, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

router.route("/").post(function (req, res) {
  console.log(req.body);
  creatone(req.body.name, req.body.password, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

module.exports = router;
