/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var models = require('../models');

var sequelizeConnection = models.sequelize

// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// make our tables
// note: force:true drops the table if it already exists
.then(function(){
  return sequelizeConnection.sync({force:true})
})


//Establish page routing
router.get('/', function (req, res) {
	res.redirect('/index');
});

router.get('/index', function (req, res) {
		res.render('index', {data: 'test'});
});

router.get('/browse', function (req, res) {
  console.log('goals access requested');
  models.Goals.findAll({})
  .then(function(allGoals){
    console.log(allGoals);
    var goalObject = { goals: allGoals};


    res.render('browse', goalObject);
  })

  // res.render('browse', {data: 'test'});
});

router.get('/bprofile', function (req, res) {
    res.render('bprofile', {data: 'test'});
});

router.get('/uprofile', function (req, res) {
  res.render('uprofile', {data: 'test'});
});

router.get('/goalcreate', function (req, res) {
    res.render('goalcreate', {data: 'test'});
});

router.get('/signup', function (req, res) {
    res.render('signup', {data: 'test'});
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
