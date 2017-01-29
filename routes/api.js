var express = require('express');
var keystone = require('keystone');

var router = express.Router()
var Content = keystone.list('Content');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('request: ', Date.now(), req.originalUrl)
  next()
});

router.get('/content', function (req, res) {
  
		Content.model.find().exec()
			.then(function (content) {

               
				res.json(content);
			},function (err) {
			console.error(err);
			res.status(500).json({error: err});
		});

})

module.exports = router
