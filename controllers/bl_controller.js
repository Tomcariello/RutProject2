/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var models = require('../models');

var sequelizeConnection = models.sequelize

// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// make our tables; force:true drops the table if it already exists
.then(function(){
  // return sequelizeConnection.sync({force:true})
})


//Create sequelize associations in the table

//Assign user 1 goal 1
models.Users.findOne({where: {id: 1} })
  // with .then, we can work with this an instance and add a goal
  .then(function(user){
    // if (!user){ 
    //   console.log("you gots no user at id=1");
    // } else {
    return user.addGoals(1);
    // }
  })

// models.Users.findOne({where: {id: 2} })
//   // with .then, we can work with this an instance and add a goal
//   .then(function(user){
//     return user.addGoals(2);
//   })

// models.Users.findOne({where: {id: 3} })
//   // with .then, we can work with this an instance and add a goal
//   .then(function(user){
//     return user.addGoals(4);
//   })

// models.Users.findOne({where: {id: 4} })
//   // with .then, we can work with this an instance and add a goal
//   .then(function(user){
//     return user.addGoals(3);
//   })


//Establish page routing
router.get('/', function (req, res) {
	res.redirect('/index');
});

router.get('/index', function (req, res) {
		res.render('index', {data: 'test'});
});

router.get('/browse', function (req, res) {
  console.log('goals access requested');
  //Find all goals
  models.Goals.findAll({})

  //find goals the current user does not already have on their list
  // models.Users.findOne({where: {id: parseInt(req.params.userId)} })
  // .then(function() {

  //   //return goals that are not associated with the provided ID through usergoals table

  // })
  .then(function(allGoals){
    var goalObject = { goals: allGoals};

    res.render('browse', goalObject);
  })
});

//Route to process goals being added
router.get('/add-user-goal/:userId/:goalId', function (req, res) {
  // console.log('adding a goal: ID is ' + req.params.userId + " and goalid is " + req.params.goalId);

  models.Users.findOne({where: {id: parseInt(req.params.userId)} })
  // with .then, we can work with this an instance and add a goal
  .then(function(user){
    return user.addGoals(parseInt(req.params.goalId));
  })

  res.redirect('/browse');
});

router.get('/bprofile', function (req, res) {
    console.log('business profile is requested');
    models.BusinessUsers.findAll({

    }).then(function(bprofile){
      console.log(bprofile);

    })
    res.render('bprofile');
});

router.get('/uprofile', function (req, res) {
  res.render('uprofile', {data: 'test'});
});

router.get('/goalcreate', function (req, res) {
    res.render('goalcreate', {data: 'test'});
});

router.get('/signup', function (req, res) {
    res.render('signup', {message: req.flash('loginMessage')});
});

//process login form
router.post('.signup', passport.authenticate('local-login', {
  successRedirect : '/uprofile', //redirect to profile page
  failureRedirect : '/signup', //redirect to signup if error
  failureFlash : true //allow message
}));

//SignUp
router.get('/signup', function(req, res) {
  res.render('signup', { message: req.flash('loginMessage') });
});

//process signup form
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/uprofile', //redirect to profile page
  failureRedirect : '/signup', //redirect back to signup if error
  failureFlash : true //allow message
}))

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

//route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated())
    return next();
  res.redirect('/index');
}

module.exports = router;
