var faker = require('faker');
 
    var randomName = faker.name.findName(); 
    var randomPrice = faker.commerce.price(); 

    console.log(randomName);
    console.log(randomPrice);