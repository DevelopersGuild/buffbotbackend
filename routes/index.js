var express = require('express');
var router = express.Router();
const Wit = require('node-wit').Wit;
const session = 'my-user-session-42';
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

	var response = {};

	client.message(req.query.message, context, (error, data) => {
	  if (error) {
	    console.log('Oops! Got an error: ' + error);
	  } else {
	    console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
	    response.first = data;
	    client.converse(session, req.query.message, context, (error, data) => {
		  if (error) {
		    console.log('Oops! Got an error: ' + error);
		    res.json(response);
		  } else {
		    console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
		    reponse.second = data;
		    res.json(response);
		  }
		});
	  }
	});

	res.json(response);
  	// res.send(req.query.message);
  	// res.render("index",{"title": req.body.message})
});

module.exports = router;
