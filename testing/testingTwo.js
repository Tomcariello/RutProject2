'use strict';

var Nightmare = require('nightmare'),
    should = require('chai').should(),
    nightmare = Nightmare({ show: true });


nightmare
  
  .goto('https://frozen-beyond-19089.herokuapp.com/login')
 
  .type('#email', 'chimichangas4eva@yourmom.com') 

  .type('#number', '555-132-3434')
 
  .type('#password', '555-132-3434')

  .click('#submitForm')

  .scrollTo(200, 0)

  .screenshot('workshops.png')

  .evaluate(function () {
     return document.querySelectorAll('div.course-list-item-alt').length;
  })
  
  .end()
  .then(function (workshops) { 
    workshops.should.be.above(1);
  })