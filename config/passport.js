//load what we need
var localStrategy = require('passport-local').Strategy;

//load user model
// var configDB = require('../models/users.js');
var configDB = require('./config.json');
var Sequelize = require('sequelize');
var pg = require('pg').native;
var pghstore = require('pg-hstore');
var sequelize = new Sequelize(configDB.url);

var User = sequelize.import('../models/users.js');
User.sync();

//Auth variables
var configAuth = require('./auth');

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
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done) {
    User.findOne({ where: { localemail: email }})
    .then(function(existingUser) {
        
      //check other users for same email
      if (existingUser)
        return done(null, false, req.flash('loginMessage', 'That email is already in use.'));

      //Connect a new local account.
      if(req.user) {
        var user = req.user;
        user.localemail = email;
        user.localpassword = User.generateHash(password);
        user.save().catch(function(err) {
          throw err;
        }).then(function() {
          done(null, user);
        });
      }
      //Not logged in. Create New User.
      else{
        var newUser = User.build({ localemail: email, localpassword: User.generateHash(password)});
        newUser.save().then(function() {done (null, newUser);}).catch(function(err) {
          done(null, false, req.flash('loginMessage', err));
        });
      }
    })
    .catch(function(e) {
      done(null, false, req.flash('loginMessage', e.name + " " + e.message));
    })
  }));
};