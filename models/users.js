'use strict';
var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {
    classMethods: {
<<<<<<< HEAD
      generateHash : function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
    },
    instanceMethods: {
      validPassword : function(password) {
        return bcrypt.compareSync(password, this.localpassword);
      },
    },
    getterMethods: {
      someValue: function() {
        return this.someValue;
      }
    },
    setterMethods: {
      someValue: function(value ) {
        this.someValue = value; 
=======
      associate: function(models) {
        // associations can be defined here
        // Users.hasMany(Goals, {as: 'UserGoals'})
        // Users.belongsToMany(models.Goals, {through: 'UserGoals'});
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914
      }
    }
  });
  return Users;
};