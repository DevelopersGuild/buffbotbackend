var express = require('express');
var router = express.Router();
const Wit = require('node-wit').Wit;
const actions = {
  say(sessionId, context, message, cb) {
    console.log(message);
    cb();
  },
  merge(sessionId, context, entities, message, cb) {
    cb(context);
  },
  error(sessionId, context, error) {
    console.log(error.message);
  },
};
const context = {};
const client = new Wit("NCBWVKHN3ZEVOFCFAG5CFUA5MKZB6VNO", actions);


/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.query.message);
	const context = {};
	client.converse(req.query.message, context, (error, data) => {
	  if (error) {
	    console.log('Oops! Got an error: ' + error);
	  } else {
	    console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
	    res.send(data)
	  }
	});
  	// res.send(req.query.message);
  	// res.render("index",{"title": req.body.message})
});

module.exports = router;
