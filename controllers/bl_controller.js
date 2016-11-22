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


// Create sequelize associations in the table

//Assign user 1 goal 1
models.Users.findOne({where: {id: 1} })
  // with .then, we can work with this an instance and add a goal
  .then(function(user){
    return user.addGoals(1);
  })

models.Users.findOne({where: {id: 2} })
  // with .then, we can work with this an instance and add a goal
  .then(function(user){
    return user.addGoals(2);
  })

models.Users.findOne({where: {id: 3} })
  // with .then, we can work with this an instance and add a goal
  .then(function(user){
    return user.addGoals(4);
  })

models.Users.findOne({where: {id: 4} })
  // with .then, we can work with this an instance and add a goal
  .then(function(user){
    return user.addGoals(3);
  })


//Establish page routing
router.get('/', function (req, res) {
	res.redirect('/index');
});

router.get('/index', function (req, res) {
		res.render('index', {data: 'test'});
});

router.get('/browse/:userId', function (req, res) {
  console.log('goals access requested');
  //Find all goals
  // models.Goals.findAll({})

  //find goals the current user does not already have on their list
  models.Users.findOne({where: {id: parseInt(req.params.userId)} })

  // we pass that user into our callback
  .then(function(result){
    // and user getAssociations to retrieve all of that user's fandoms
    return result.getGoals()
    
    // we then pass the fandoms in a final callback
    .then(function(allGoals){
      var goalObject = { goals: allGoals};
      res.render('browse', goalObject);
    })
  });
});

//Route to process goals being added
router.get('/add-user-goal/:userId/:goalId', function (req, res) {
  // console.log('adding a goal: ID is ' + req.params.userId + " and goalid is " + req.params.goalId);

  models.Users.findOne({where: {id: parseInt(req.params.userId)} })
  // with .then, we can woradd-user-goal/1/{{this.id}}k with this an instance and add a goal
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
      var businessObject = { bprofile: bprofile };
      res.render('bprofile', businessObject);
    })
});

router.get('/uprofile', function (req, res) {
 console.log('goals access requested');
 //Find all goals
 // models.Goals.findAll({})

 //find goals the current user does not already have on their list
 // models.Users.findOne({where: {id: parseInt(req.params.userId)} })
 models.Users.findOne({where: {id: 1} })

 // we pass that user into our callback
 .then(function(result){
   // and user getAssociations to retrieve all of that user's fandoms
   return result.getGoals()
   
   // we then pass the fandoms in a final callback
   .then(function(allGoals){
     var goalObject = { goals: allGoals};
     res.render('uprofile', goalObject);
   })
 });
});



// router.get('/:user/goals', function(req, res){

//     // we save the user's name to a user variable
//     var user = req.params.user;

//     // then, we instance the matching user with findOne
//     models.User.findOne({where: { username: user} })
//     // we pass that user into our callback
//     .then(function(result){
//         // and user getAssociations to retrieve all of that user's fandoms
//         return result.getGoals()
//         // we then pass the fandoms in a final callback
//         .then(function(goals){
//             // and send it to our client as json data
//             return res.json(goals);
//         })
//     })
// })


router.get('/uprofile', function (req, res) {
  console.log('user profile is requested');
  models.UserGoals.findAll({

  }).then(function(uprofile){
    console.log(uprofile);
    var userObject = { uprofile: uprofile };
    res.render('uprofile', userObject);
  })
});

router.get('/goalcreate', function (req, res) {
    res.render('goalcreate', {data: 'test'});
});

router.get('/signup', function (req, res) {
    res.render('signup', {data: 'test'});
});


module.exports = router;
