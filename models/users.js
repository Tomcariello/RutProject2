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
      }
    }
  });
  return Users;
};