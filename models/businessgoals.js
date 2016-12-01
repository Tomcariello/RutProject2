'use strict';
module.exports = function(sequelize, DataTypes) {
  var BusinessGoals = sequelize.define('BusinessGoals', {
    GoalId: DataTypes.INTEGER,
    BusinessUserId: DataTypes.INTEGER
  });
  return BusinessGoals;
};