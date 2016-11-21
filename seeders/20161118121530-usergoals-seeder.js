'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('users', [
      {
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00",
        GoalID: 1,
        UserId: 1
      },
      {
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00",
        GoalID: 2,
        UserId: 2
      },
      {
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00",
        GoalID: 3,
        UserId: 3
      },
      {
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00",
        GoalID: 4,
        UserId: 4
      }
      ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
