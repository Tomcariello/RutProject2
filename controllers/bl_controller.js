/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require('../models');
var bodyParser = require('body-parser')

var sequelizeConnection = models.sequelize;

// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

<<<<<<< HEAD
// make our tables; force:true drops the table if it already exists
.then(function(){
  // return sequelizeConnection.sync({force:true})
});

=======
// // make our tables; force:true drops the table if it already exists
// .then(function() {
//     return sequelizeConnection.sync({force:true})
// })
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914


// Create sequelize associations in the table

<<<<<<< HEAD
//Assign user 1 goal 1

=======
// Assign user 1 goal 1
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914
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

// =================================================================
// Assign business 1 goal 1
models.BusinessUsers.findOne({ where: { id: 1 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(business) {
        return business.addGoals(1);
    })

models.BusinessUsers.findOne({ where: { id: 2 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(business) {
        return business.addGoals(2);
    })

models.BusinessUsers.findOne({ where: { id: 3 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(business) {
        return business.addGoals(4);
    })

models.BusinessUsers.findOne({ where: { id: 4 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(user) {
        return user.addGoals(3);
    })



<<<<<<< HEAD
=======
// =================================================================
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914
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

//browse goals without being logged in
router.get('/browse', function (req, res) {
  models.Goals.findAll({})
  .then(function(allGoals){
    var goalObject = { goals: allGoals};
    res.render('browseusergoals', goalObject);
  })
})

router.get('/browse/:userId', function (req, res) {
  console.log('goals access requested');
<<<<<<< HEAD

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

=======
  console.log(req.params.userId);
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914
  //Find all goals that are not already associated with the current user

  //look up user ID
  models.Users.findOne({where: {id: req.params.userId} })
  .then(function(user){
    //get user associated goals
    return user.getGoals()
  })
  .then(function(allUserGoals){

    //get all goals and filter out allUserGoals
    var goalsToExclude = [-1];

    for (i = 0; i < allUserGoals.length; i++) {
      goalsToExclude.push(allUserGoals[i].id)
    } 
    console.log("Goals to exclude are: " + goalsToExclude);

    return models.Goals.findAll({
      where: {
        $not: [
          { id: goalsToExclude },
        ]
      }
    });
  })
    .then(function(unselectedGoals) {
      //get all goals and exclude user associated goals
      var goalObject = { goals: unselectedGoals};
      res.render('browseusergoals', goalObject);
    })
});

<<<<<<< HEAD

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
=======
router.get('/bprofile/:businessId', function(req, res) {
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914
    console.log('business profile is requested');
    console.log(req.params.businessId);
    models.BusinessUsers.findOne({where: { id: req.params.businessId} })

    .then(function(result) {
      var data=
      {
        businessname: result.businessname,
        website: result.website,
        email: result.email,
        zipcode: result.zipcode
      }
        // and user getAssociations 
        return result.getGoals()
          // final callback
          .then(function(allGoals) {
            console.log(allGoals)
            var goalObject = allGoals
            data.goals = goalObject
            res.render('bprofile', data);
          });
    });
    });

<<<<<<< HEAD
    }).then(function(bprofile) {
        console.log(bprofile);
        var businessObject = { bprofile: bprofile };
        res.render('bprofile', businessObject);
    })
    // res.render('bprofile');
});

router.get('localhost:3000/uprofile/:userId', function(req, res) {
=======

router.get('/uprofile/:userId', function(req, res) {
  console.log('******************************')
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914
    console.log('goals access requested');
    console.log(req.params.userId);
    models.Users.findOne({ where: { id: req.params.userId } })

    // we pass that user into our callback
    .then(function(result) {
      var data=
      {
        firstname: result.firstname,
        lastname: result.lastname,
        email: result.email
      }
        // and user getAssociations
        return result.getGoals()
          // we then pass the fandoms in a final callback
          .then(function(allGoals) {
            allGoals.forEach(function(value){
              models.BusinessGoals.findAll({ where: {GoalId: value.id}})
              .then(function(results){
                console.log('results', results)
              });
            // console.log('GOALS:', allGoals)
            var goalObject = allGoals
            data.goals= goalObject
            res.render('uprofile', data);
          });
        });
    });
});


<<<<<<< HEAD
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
=======
//Add a goal per user
router.get('/add-user-goal/:userId/:goalId', function(req, res) {
  console.log('Goal being added');
  models.Users.findOne({ where: { id: parseInt(req.params.userId) } })
    // with .then, we can work with this instance and add a goal
    .then(function(user) {
        user.addGoals(parseInt(req.params.goalId), {goalstatus: false });
        var urlRedirect = '/browse/' + req.params.userId;
        res.redirect(urlRedirect);
    })
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914
});


//Create a goal for the entire database & add to user
router.post('/create-goal', function(req, res) {

  var goal = req.body.addGoalName;
  var imageurl = req.body.addGoalURL;
  var userID = req.body.userID;

  //Create Goal and append to database
  models.Goals.create(
    {
      // the username
      goalname: goal, 
      imageURL: imageurl
    }
  )
  //add this goal to the user that created it
  .then(function(result){
    models.Users.findOne({ where: { id: req.body.userID } })
    .then(function(user) {
      user.addGoals(result.id);
      res.redirect('/browse');
    })
  })
});

// router.get('/signup', function(req, res) {
//     res.render('signup', { data: 'test' });
// });


<<<<<<< HEAD
//route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if(req.isAuthenticated())
    return next();
  res.redirect('/index');
}
=======
router.get('/contact', function(req, res) {
    res.render('contact', { data: 'test' });
});
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914

module.exports = router;