'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('goals', [
      {
        goalname: '',
        imageURL: "",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: '',
        imageURL: "",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: '',
        imageURL: "",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: '',
        imageURL: "",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: '',
        imageURL: "",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: '',
        imageURL: "",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Swim with sharks',
        imageURL: "http://www.sharksider.com/images/swimming-with-sharks-in-cage.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Go on a hot air balloon ride',
        imageURL: "http://www.blueridgeballoon.com/images/horizon%20float.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'See the pyramids in Egypt',
        imageURL: "http://static.egypt.travel/2016/07/Welcome-slide1-1.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Dunk a basketball',
        imageURL: "http://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/w/t/wtb0516r-1.jpg",
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
