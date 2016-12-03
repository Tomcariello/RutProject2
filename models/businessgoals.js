'use strict';

module.exports = function(sequelize, DataTypes) {
  var BusinessGoals = sequelize.define('BusinessGoals', {
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.BusinessUsers.belongsToMany(models.Goals, {through: 'BusinessGoals'});
        models.Goals.belongsToMany(models.BusinessUsers, {through: 'BusinessGoals'});
      }
    }
  });
  return BusinessGoals;
};