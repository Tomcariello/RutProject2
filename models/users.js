'use strict';

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Users.hasMany(Goals, {as: 'UserGoals'})
        // Users.belongsToMany(models.Goals, {through: 'UserGoals'});
      }
    }
  });
  return Users;
};