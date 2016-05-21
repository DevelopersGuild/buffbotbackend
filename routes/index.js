var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.body.message);
  	res.send({data: "message received"});
});

module.exports = router;
