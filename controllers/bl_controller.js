/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var goals = require('../models/goals.js');

router.get('/', function (req, res) {
	res.redirect('/goals');
});

router.get('/goals', function (req, res) {
	goals.all(function (data) {
		var goalsObject = { goals: data };
		console.log(goalsObject);
		res.render('index', {data: 'test'});
	});
});

// router.post('/burgers/create', function (req, res) {
// 	burger.create([req.body.newBurgerName], function () {
// 		res.redirect('/burgers');
// 	});
// });

// router.put('/burgers/update/:id', function (req, res) {
// 	var condition = req.params.id;

// 	console.log('condition ', condition);

// 	burger.update(req.params.id, function () {
// 		res.redirect('/burgers');
// 	});
// });

module.exports = router;
