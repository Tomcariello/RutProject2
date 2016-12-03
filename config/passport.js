console.log('passport.js is doing something');

//load what we need
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

//load user model
// var configDB = require('../models/users.js');
var configDB = require('./config.json');
var Sequelize = require('sequelize');
// var pg = require('pg').native;
// var pghstore = require('pg-hstore');
var sequelize = new Sequelize(configDB.development);
var db = require('../models');

var User = sequelize.import('../models/users.js');
var Goals = sequelize.import('../models/goals.js');
// User.sync();
// Goals.sync()
//Auth variables
//var configAuth = require('./auth');

//passport signin
module.exports = function(passport) {
  //serialize user
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  //deserialize user
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user){
      done(null, user);
    }).catch(function(e){
      done(e, false);
    });
  });

  //Local Login
  passport.use('local-login', new localStrategy({
    // e-mail and password
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true //checks if user is logged in or not
  },
  function(req, email, password, done) {
    User.findOne({ where: { localemail: email}})
    .then(function(user){
      if(!user){
        done(null, false, req.flash('loginMessage', 'Unknown user'));
      } else if (!user.validPassword(password)) {
        done(null, false, req.flash('loginMessage', 'Wrong password'));
      } else {
        done(null, user)
      }
    })
    .catch(function(e) {
      done(null, false, req.flash('loginMessage', e.name + " " + e.message));
    });
  }));

  //Local Signup
  passport.use('local-signup', new localStrategy({
    passReqToCallback : true,
    usernameField : 'email',
    passwordField : 'password'    
  },
  function(req, username, password, done) {
    db.Users.create({
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      email: req.body.email ,
      password: req.body.password,
      zipcode: req.body.zipcode
    }).then(function(user) {
      console.log('show me an id?', user)
      /*user.userName = req.body.email
      user.zipcode = parseInt(req.body.zipcode);
      user.save();*/
      return done(null, user);
    }).catch(function(err) {
      if(err) throw err;
      console.log("FAIL FAIL FAIL FAIL")
      return done(null, false);
    });
    // console.log(req, username, password)
  }
));
}
  /*function(req, email, password, done) {
    User.findOne({ where: { email: email }})
    .then(function(existingUser) {
        
      //check other users for same email
      if (existingUser) {
        return done(null, false, req.flash('loginMessage', 'That email is already in use.'));
      }

      //Connect a new local account.
      if(req.user) {
        var user = req.user;
        user.email = email;
        user.password = User.generateHash(password);
        user.firstname = req.body.firstName;
        user.lastname = req.body.lastName;
        user.zipcode = parseInt(req.body.zipcode);
        user.save().catch(function(err) {
          throw err;
        }).then(function() {
          done(null, user);
        });
      } else {
        //Not logged in. Create New User.
        var newUser = User.build({ 
          email: email,
          password: User.generateHash(password),
          firstname: req.body.firstName,
          lastname: req.body.lastName,
          zipcode: parseInt(req.body.zipcode)
        });
        newUser.save()
        .then(function() {done (null, newUser);}).catch(function(err) {
          done(null, false, req.flash('loginMessage', err));
        });
      }
    })
    .catch(function(e) {
      done(null, false, req.flash('loginMessage', e.name + " " + e.message));
    })
  }));
};*/