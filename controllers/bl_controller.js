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
.then(function() {
    // return sequelizeConnection.sync({force:true})
})


// Create sequelize associations in the table

//Assign user 1 goal 1
models.Users.findOne({ where: { id: 1 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(user) {
        return user.addGoals(1);
    })

models.Users.findOne({ where: { id: 2 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(user) {
        return user.addGoals(2);
    })

models.Users.findOne({ where: { id: 3 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(user) {
        return user.addGoals(4);
    })

models.Users.findOne({ where: { id: 4 } })
    // with .then, we can work with this an instance and add a goal
    .then(function(user) {
        return user.addGoals(3);
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



// =================================================================
//Establish page routing
router.get('/', function(req, res) {
    res.redirect('/index');
});

router.get('/index', function(req, res) {
    res.render('index', { data: 'test' });
});

router.get('/browse', function (req, res) {
  console.log('goals access requested');
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

//Add a goal per use
router.get('/add-user-goal/:userId/:goalId', function(req, res) {
  models.Users.findOne({ where: { id: parseInt(req.params.userId) } })
    // with .then, we can woradd-user-goal/1/{{this.id}}k with this an instance and add a goal
    .then(function(user) {
        return user.addGoals(parseInt(req.params.goalId));
    })

    res.redirect('/browse');
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
            console.log(allGoals)
            var goalObject = allGoals
            data.goals= goalObject
            res.render('uprofile', data);
          });
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


router.get('/uprofile', function(req, res) {
    console.log('user profile is requested');
    models.UserGoals.findAll({

    }).then(function(uprofile) {
        console.log(uprofile);
        var userObject = { uprofile: uprofile };
        res.render('uprofile', userObject);
    });
});

//Create a goal for the entire database
router.get('/goalcreate/:goalname/:imageurl', function(req, res) {
  var goal = req.params.goalname;
  var imageurl = req.params.imageurl;
  models.Goals.create(
    {
      // the username
      goalname: goal, 
      imageURL: imageurl
    }
  )

  res.redirect('/browse');
});

router.get('/signup', function(req, res) {
    res.render('signup', { data: 'test' });
});


module.exports = router;
