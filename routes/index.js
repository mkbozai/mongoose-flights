var express = require('express');
var router = express.Router();

// Don't want a home page for this app
router.get('/', function(req, res, next) {
  res.redirect('/flights');
});

module.exports = router;
