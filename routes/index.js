var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.body.message);
  	res.send(req.body.message);
  	res.render("index",{"title": req.body.message})
});

module.exports = router;
