require('dotenv').config();

const config = {
    DB_DRIVER: process.env.DB_DRIVER,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    SALT_FACTOR: parseInt(process.env.SALT_FACTOR),
    JWT_SECRET: process.env.JWT_SECRET
};

module.exports = config;