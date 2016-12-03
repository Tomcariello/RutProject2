/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var models = require('../models');
var bodyParser = require('body-parser');


// module.exports = function(app, passport) {
// //locally login
//   router.get('/login', function (req, res) {
//     console.log('***** Login get route accessed *****');
//     // render the page and pass in any flash data if it exists
//     res.render('login', {message: req.flash('loginMessage')});
//   });

//   //process login form
//   router.post('/login', passport.authenticate('local-login', {
//     successRedirect : '/uprofile', //redirect to profile page
//     failureRedirect : '/signup', //redirect to signup if error
//     failureFlash : true //allow message
//   }));

//   //SignUp
//   router.get('/signup', function(req, res) {
//     console.log('***** Signup get route accessed *****');
//     res.render('signup', { message: req.flash('loginMessage') });
//     res.render('signup', { data: 'test' }, { user: 2});
//   });

//   //process signup form
//   router.post('/signup', passport.authenticate('local-signup', {
//     successRedirect : '/uprofile', //redirect to profile page
//     failureRedirect : '/signup', //redirect back to signup if error
//     failureFlash : true //allow message
//     }));
// };


var sequelizeConnection = models.sequelize

// We run this query so that we can drop our tables even though they have foreign keys
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// // make our tables; force:true drops the table if it already exists
.then(function() {
    return sequelizeConnection.sync();
})


// Create sequelize associations in the table

// Assign users goals
models.Users.findOne({ where: { id: 1 } }).then(function(user) {return user.addGoals(1); })
models.Users.findOne({ where: { id: 2 } }).then(function(user) {return user.addGoals(2); })
models.Users.findOne({ where: { id: 3 } }).then(function(user) {return user.addGoals(4); })
models.Users.findOne({ where: { id: 4 } }).then(function(user) {return user.addGoals(3); })

// Assign businesses goals 
models.BusinessUsers.findOne({ where: { id: 1 } }).then(function(business) { return business.addGoals(1); })
models.BusinessUsers.findOne({ where: { id: 2 } }).then(function(business) { return business.addGoals(2); })
models.BusinessUsers.findOne({ where: { id: 3 } }).then(function(business) { return business.addGoals(4); })
models.BusinessUsers.findOne({ where: { id: 4 } }).then(function(user) { return user.addGoals(3); })


// =================================================================
//Establish page routing
router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('/index', function(req, res) {
    res.render('index', { data: 'test' });
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






router.get('/browsebusiness/:userId', function (req, res) {
  //look up user ID
  models.BusinessUsers.findOne({where: {id: req.params.userId} })
  .then(function(business){
    //get business associated goals
    return business.getGoals()
  })
.then(function(allBusinessGoals){

    //get all goals and filter out allBusinessGoals
    var goalsToExclude = [-1];

    for (i = 0; i < allBusinessGoals.length; i++) {
      goalsToExclude.push(allBusinessGoals[i].id)
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
      res.render('browsebusinessgoals', goalObject);
    })
});









router.get('/bprofile/:businessId', function(req, res) {
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

router.get('/uprofile/:userId', function(req, res) {
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

          .then(function(allGoals) {

            var goalObject = allGoals
            data.goals= goalObject
            res.render('uprofile', data);
          });
        });
    });

router.get('/contact', function(req, res) {
  res.render('contact', { data: 'test' });
 });

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
});

//Add a goal per user
router.get('/add-business-goal/:userId/:goalId', function(req, res) {
  models.BusinessUsers.findOne({ where: { id: parseInt(req.params.userId) } })
    // with .then, we can work with this instance and add a goal
    .then(function(business) {
        business.addGoals(parseInt(req.params.goalId));
        var urlRedirect = '/browsebusiness/' + req.params.userId;
        res.redirect(urlRedirect);
    })
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

//Load Signup Page
router.get('/signup', function(req, res) {
  res.render('signup');
});

router.post('/usersignupcomplete', function(req, res) {
  console.log('*****************User Sign Up Information Submitted ****************');
  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var zipcode = req.body.zipcode;
  var email = req.body.email;
  var password = req.body.password;

    models.Users.create(
    {
      // the username
      firstname: first_name, 
      lastname: last_name,
      email: email, 
      password: password,
      zipcode: zipcode
    }
  )
  res.redirect('/browse/2');
});

router.post('/businesssignupcomplete', function(req, res) {
  console.log('*****************Business Sign Up Information Submitted ****************');
  var business_name = req.body.business_name;
  var zipcode = req.body.zipcode;
  var email = req.body.email;
  var website = req.body.website;
  var password = req.body.password;

    models.BusinessUsers.create(
    {
      // the username
      businessname: business_name, 
      website: website,
      email: email, 
      password: password,
      zipcode: zipcode
    }
  )
  res.redirect('browsebusiness/5');
});

router.get('/login', function(req, res) {
  console.log('*****************Login Requested ****************');
  res.render('login');
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated())
    return next();
  res.redirect('/index');
}

module.exports = router;