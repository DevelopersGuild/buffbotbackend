var express = require('express');
var router = express.Router();
var wit = require('node-wit');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query.message);
  	res.send(JSON.stringify(req.query.message));
  	// res.render("index",{"title": req.body.message})
});

module.exports = router;
