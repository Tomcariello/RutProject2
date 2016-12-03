'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Users', [
      {
        firstname: 'Hannibal',
        lastname: "Smith",
        email: "Hannibal@ateam.com",
        password: "plan",
        zipcode : "07506",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        firstname: 'HM',
        lastname: "Murdock",
        email: "Howlingmad@ateam.com",
        password: "password",
        zipcode : "07506",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        firstname: 'BA',
        lastname: "Baracus",
        email: "MrT@ateam.com",
        password: "pity",
        zipcode : "07506",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        firstname: 'Templeton',
        lastname: "Peck",
        email: "Face@ateam.com",
        password: "password",
        zipcode : "07506",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
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
