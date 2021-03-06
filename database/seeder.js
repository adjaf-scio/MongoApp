const faker = require('faker');
const mongoose = require('mongoose');

const seedDatabase = async () => {
    var dbConnection = require('./mongo');
    dbConnection().then(() => console.log('connection done')).catch((err) => console.log(err));

    require('../models/index');

    const Contact = mongoose.model('Contact');
    const User = mongoose.model('User');
    const Group = mongoose.model('Group');

    console.log('\n*******Creating user********')
    const user = await User.create({
        firstName: 'Apprentice',
        lastName: 'Pro',
        email: faker.internet.email(),
        password: '12345678'
    });

    console.log('\n*******Creating contacts********')
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

    console.log('\n*******Creating groups********')
    for (let index = 0; index < 3; index++) {
        await Group.create({
            name: faker.lorem.word(6),
            color: faker.commerce.color()
        })
    }

    console.log('\n*******Assigning one group to one contact********')
    const group = await Group.findOne();
    const contact = await Contact.findOne();
    
    contact.groups.push(group._id);
    await contact.save();

    console.log('\nSEED COMPLETE');

    console.log('Your user info is: \n' + JSON.stringify(user.userWithToken()));

    process.exit();
}


seedDatabase();