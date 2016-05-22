var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query.message);
  	res.send(req.query.message);
  	// res.render("index",{"title": req.body.message})
});

module.exports = router;
