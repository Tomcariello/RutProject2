'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('goals', [
      {
        goalname: 'See the Norhtern Lights',
        imageURL: "http://www.sharksider.com/images/swimming-with-sharks-in-cage.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Surf waves in Hawaii',
        imageURL: "http://www.blueridgeballoon.com/images/horizon%20float.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Develop a video game',
        imageURL: "http://static.egypt.travel/2016/07/Welcome-slide1-1.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Kick a field goal',
        imageURL: "http://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/w/t/wtb0516r-1.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Visit Disney Land',
        imageURL: "http://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/w/t/wtb0516r-1.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'See the Eiffel Tower',
        imageURL: "http://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/w/t/wtb0516r-1.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Ski the Alps',
        imageURL: "http://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/w/t/wtb0516r-1.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Tour the Mississippi river',
        imageURL: "http://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/w/t/wtb0516r-1.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Learn to fly a plane ',
        imageURL: "http://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/w/t/wtb0516r-1.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Write a book',
        imageURL: "http://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/w/t/wtb0516r-1.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
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
