'use strict';
module.exports = function(sequelize, DataTypes) {
  var Goals = sequelize.define('Goals', {
    goalname: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Goals;
};