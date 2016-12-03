var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
    .wait()
    .goto('https://frozen-beyond-19089.herokuapp.com/')
    .wait(3000)
    .click('a#contact.mainLinks')
    .wait(2000)
    .type('input#first_name.validate', 'Wade')
    .type('input#last_name.validate', 'Wilson')
    .type('input#email,validate', 'chimichanga4eva@yourmom.com')
    .type('textarea#textarea1.materialize-textarea', 'Today was as much fun as a sandpaper dildo..')
    .wait(3000)
    .click('button#submitForm.btn.waves-effect.waves-light')
    .wait(3000)
    .end()
    .catch(function(error) {
        console.error('Search failed:', error);
    });
