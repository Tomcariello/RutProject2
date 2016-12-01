/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require('../models');

var sequelizeConnection = models.sequelize;

// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// make our tables; force:true drops the table if it already exists
.then(function(){
  // return sequelizeConnection.sync({force:true})
});



// Create sequelize associations in the table

//Assign user 1 goal 1

models.Users.findOne({ where: { id: 1 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(user) {
        // return user.addGoals(1);
    })

models.Users.findOne({ where: { id: 2 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(user) {
        // return user.addGoals(2);
    })

models.Users.findOne({ where: { id: 3 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(user) {
        // return user.addGoals(4);
    })

models.Users.findOne({ where: { id: 4 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(user) {
        // return user.addGoals(3);
    })



//Establish page routing
router.get('/', function(req, res) {
    res.render('index', { data: 'test' });
});

router.get('/login', function(req, res){
    // res.render('')
    console.log("log in route hit");
    models.Users.findOne({where:{id:1}})
    .then(function(user){

        console.log('please find a thing and do a thing' + user.firstname);
    })
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
  });
});

//Route to process goals being added
router.get('/add-user-goal/:userId/:goalId', function (req, res) {
  // console.log('adding a goal: ID is ' + req.params.userId + " and goalid is " + req.params.goalId);

  models.Users.findOne({where: {id: parseInt(req.params.userId)} })
  // with .then, we can work with this an instance and add a goal
  .then(function(user){
    return user.addGoals(parseInt(req.params.goalId));
  });

  //Find all goals that are not already associated with the current user
    
  // models.Goals.findAll({include: 
  //   [{model: models.Users, 
  //     where: {id: {$ne: 3}}}] })
  // .then(function(allGoals){
  //   // console.log(allGoals.length);
  //   var goalObject = { goals: allGoals};
  //   res.render('browse', goalObject);
  // });

  //look up user ID
  models.Users.findOne({where: {id: 3} })
  .then(function(user){
    //get user associated goals
    return user.getGoals()
  })
  .then(function(allUserGoals){

    //get all goals and filter out allUserGoals
    var goalsToExclude = [];

    for (i =0; i < allUserGoals.length; i++) {
      goalsToExclude.push(allUserGoals[i].id)
    } 
    console.log("Goals to exclude are: " + goalsToExclude);

    return models.Goals.findAll({
      where: {
        $not: [
          // { id: allUserGoals },
          { id: goalsToExclude },
        ]
      }
    });
  })
    .then(function(unselectedGoals) {
      //get all goals and exclude user associated goals
      var goalObject = { goals: unselectedGoals};
      res.render('browse', goalObject);
    })
});


console.log("********************************************");//Route to process goals being added
router.get('/add-user-goal/:userId/:goalId', function(req, res) {
  console.log("********************************************");
  console.log('adding a goal: ID is ' + req.params.userId + " and goalid is " + req.params.goalId);
  console.log("********************************************");
    models.Users.findOne({ where: { id: parseInt(req.params.userId) } })
        // with .then, we can woradd-user-goal/1/{{this.id}}k with this an instance and add a goal
        .then(function(user) {
            return user.addGoals(parseInt(req.params.goalId));
        })

    res.redirect('/browse');
});

router.get('/bprofile', function(req, res) {
    console.log('business profile is requested');
    models.BusinessUsers.findAll({

    }).then(function(bprofile) {
        console.log(bprofile);
        var businessObject = { bprofile: bprofile };
        res.render('bprofile', businessObject);
    })
    // res.render('bprofile');
});

router.get('/uprofile/:userId', function(req, res) {
    console.log('goals access requested');
    console.log(req.params.userId)
    //Find all goals
    // models.Goals.findAll({})

    //find goals the current user does not already have on their list
    // models.Users.findOne({where: {id: parseInt(req.params.userId)} })
    models.Users.findOne({ where: { id: req.params.userId } })

    // we pass that user into our callback
    .then(function(result) {
      var data=
      {
        firstname: result.firstname,
        lastname: result.lastname,
        email: result.email
      }
        // and user getAssociations to retrieve all of that user's fandoms
        return result.getGoals()
          // we then pass the fandoms in a final callback
          .then(function(allGoals) {
            console.log(allGoals)
            var goalObject = allGoals
            data.goals= goalObject
            res.render('uprofile', data);
          });
    });
});


//Authenticate (First Login)
//module.exports = function(app, passport) {
  //locally login
  router.get('/login', function (req, res) {
    res.render('login', {message: req.flash('loginMessage')});
  });

  //process login form
  router.post('/login', passport.authenticate('local-login', {
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
  }));
//};
// router.post('/burgers/create', function (req, res) {
// 	burger.create([req.body.newBurgerName], function () {
// 		res.redirect('/burgers');
// 	});
// });


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


router.get('/uprofile', function(req, res) {
    console.log('user profile is requested');
    // res.send("please work?")
    models.Goals.findAll({

    }).then(function(uprofile) {
        console.log(uprofile);
        var userObject = { uprofile: uprofile };
        res.render('uprofile', userObject);
    });
});

router.get('/goalcreate', function(req, res) {
    res.render('goalcreate', { data: 'test' });
});

// router.get('/signup', function(req, res) {
//     res.render('signup', { data: 'test' });
// });


//route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated())
    return next();
  res.redirect('/index');
}

module.exports = router;
