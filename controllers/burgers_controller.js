/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.all(function (data) {
		var burgerObject = { burgers: data };
		console.log(burgerObject);
		res.render('index', burgerObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.create([req.body.newBurgerName], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = req.params.id;

	console.log('condition ', condition);

	burger.update(req.params.id, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;
