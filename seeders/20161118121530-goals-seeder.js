'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('goals', [
      {
<<<<<<< HEAD
        goalname: 'See the Norhtern Lights',
=======
        goalname: 'Try a Maple Bacon Donut',
        imageURL: "http://4.bp.blogspot.com/-bFfDpXUUN1o/TbhOTvCYFZI/AAAAAAAABYk/4lZCAFq44PY/s640/IMG_8719.JPG",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Eat Chinese Food in China',
        imageURL: "http://cdn.travelfreak.net/wp-content/uploads/2013/08/chinese-food.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Drink From a Coconut',
        imageURL: "http://2i7kwdob7lx1qne6v2b4pf1s.wpengine.netdna-cdn.com/wp-content/uploads/2015/09/coconut-drink-straw.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Drink Wine in Italy',
        imageURL: "http://weknowyourdreams.com/images/wine/wine-02.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Visit Chinatown in NYC',
        imageURL: "http://www.explorechinatown.com/index_files/ToC2005F.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },

      {
        goalname: 'Visit Yellowstone National Park',
        imageURL: "http://181ge72mb8rnbx7z1k119thi.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/ynp-yellowstone-entry-sign.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Visit the Smoky Mountains',
        imageURL: "http://www.visitmysmokies.com/wp-content/uploads/2015/02/spring-hikes-in-the-Smoky-Mountains.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Try In-N-Out Burger',
        imageURL: "https://assets3.thrillist.com/v1/image/1185257/size/tmg-facebook_social.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Eat a Kangaroo Meat Burger',
        imageURL: "http://www.goodfood.com.au/content/dam/images/3/1/c/i/6/image.related.articleLeadwide.620x349.310zj.png/1390522824760.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },{
        goalname: 'Try Grasshopper Tacos',
        imageURL: "http://redalertlive.com/wp-content/uploads/2011/06/Screen-shot-2011-06-13-at-4.58.34-AM.png",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },{
        goalname: 'Eat French Macaroons',
        imageURL: "https://www.saltlakeculinarycenter.com/wp-content/uploads/2013/11/Holiday-macarons-01-SaltLakeCulinaryCenter.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },{
        goalname: 'Try Kimchi',
        imageURL: "http://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },{
        goalname: 'Eat a Croissant in France',
        imageURL: "http://epicureandculture.com/wp-content/uploads/2014/12/shutterstock_172040546.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },{
        goalname: 'Try Live Octopus - Korean Dish',
        imageURL: "http://nbhorn.com/wp-content/uploads/2014/11/C360_2014-10-05-14-25-49-779-672x372.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Try Bratwurst in Germany',
        imageURL: "http://www.kitchenproject.com/german/Bratwurst/images/Bratwurst.jpg",
        createdAt: "2016-01-01 00:00:00",
        updatedAt: "2016-01-01 00:00:00"
      },
      {
        goalname: 'Swim with sharks',
>>>>>>> 151a5724e972cd0f4ef63b910edd43f2eb089914
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
