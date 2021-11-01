var mongoose = require('mongoose');
const config = require('../config/index');


async function connect () {
    mongoose.connect(`${config.DB_DRIVER}://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}


module.exports = connect;
