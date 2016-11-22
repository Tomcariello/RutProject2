'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('businessusers', [
      {
        businessname: 'Shark Swimmers',
        website: "http://www.sharkswimmers.com",
        email: "test@sharkswimmers.com",
        password: "password",
        zipcode : "07506",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        businessname: 'Vertical Leap',
        website: "http://www.verticalleap.com",
        email: "test@verticalleap.com",
        password: "password",
        zipcode : "07506",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        businessname: 'Travelocity',
        website: "http://www.Travelocity.com",
        email: "test@Travelocity.com",
        password: "password",
        zipcode : "07506",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        businessname: 'NJ Horse',
        website: "http://www.njhorses.com",
        email: "test@njhorses.com",
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
