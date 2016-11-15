'use strict';
module.exports = function(sequelize, DataTypes) {
  var BusinessUsers = sequelize.define('BusinessUsers', {
    businessname: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BusinessUsers;
};