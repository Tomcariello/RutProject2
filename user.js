var Sequelize = require('sequelize');

var connection = New Sequelize('bucketlist', 'root', 'password')

var User = connection.define('users', {
  id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isUnique: function(value, next) {
        User.find({
          where: {email: value},
          attributes: ['id']
        })
        .done(function(error, users) {
          if (error)
            //incase unexpected error occurs with the find method.
            return next(error);
          if(users)
            //Found a user with this email address.
          //Pass the error to the next method.
            return next('Email address already in use!');

            //If we got this far, the email address hasn't been used yet.
            //Call next with no arguements when validation is successful.
            next();
        })
      }
    }
  },
  body: {
    type: Sequelize.TEXT,
    validate: {
      startsWthUpper: function (bodyVal) {
        var first = string.charAt(0);
        var startsWthUpper = first === first.toUpperCase();
        if (!startsWthUpper) {
          throw new Error('First letter must be a capital letter.')
        } else {
          //...
        }
      }
    }
  }
  },{
    timestamps: false
});

connection
.sync({
  force: true,
  logging: console.log
})
.then(function() {
  return User.create({
    title: null,
    slug: 'wibble',
    body: 'wobble'
  })
})
.catch(function(error){
  console.log(error);
})



