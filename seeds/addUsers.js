var knex = require('knex');
var faker = require('faker');

var createFakerUser =() => ({

    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    price: faker.commerce.price(),
});

exports.seed = function(knex, Promise) {
   var fakeUsers = [];
    var desiredFakeUsers = 100;
    for(var i =0; i < desiredFakeUsers;i++) {
        fakeUsers.push(createFakerUser());
    }
    await knex('users')
    .insert(fakeUsers)
};