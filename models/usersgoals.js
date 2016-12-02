'use strict';

// Users = sequelize.define('Users', {})
// Goals = sequelize.define('Goals', {})

module.exports = function(sequelize, DataTypes) {
  var Usergoals = sequelize.define('Usergoals', {
    goalstatus: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Users.belongsToMany(models.Goals, {through: 'Usergoals'});
        models.Goals.belongsToMany(models.Users, {through: 'Usergoals'});
      }
    }
  });
  return Usergoals;
};