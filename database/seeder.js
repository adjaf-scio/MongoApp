const faker = require('faker');
const mongoose = require('mongoose');

const seedDatabase = async () => {
    var dbConnection = require('./mongo');
    dbConnection().then(() => console.log('connection done')).catch((err) => console.log(err));

    require('../models/index');

    const Contact = mongoose.model('Contact');
    const User = mongoose.model('User');
    const Group = mongoose.model('Group');

    const user = await User.create({
        firstName: 'Apprentice',
        lastName: 'Pro',
        email: faker.internet.email(),
        password: '12345678'
    });

    for (let index = 0; index < 10; index++) {
        await Contact.create({
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber(),
            address: {
                street: faker.address.streetName(),
                number: faker.datatype.number({ min: 1, max: 3000 }),
                district: faker.address.county(),
                zipCode: faker.datatype.number({ min: 10000, max: 99999 })
            },
            email: faker.internet.email(),
            image: faker.internet.avatar()
        });
    }

    for (let index = 0; index < 3; index++) {
        await  Group.create({
            name: faker.lorem.word(6),
            color: faker.commerce.color()
        })
    }

    console.log('SEED COMPLETE');

    console.log('Your user info is: ' + JSON.stringify(user.userWithToken()));

    process.exit();
}


seedDatabase();