const { Sequelize } = require('sequelize');
require('dotenv');
const user = process.env.USER_POSTGRES;
const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASS;
const db_port = process.env.DB_PORT;

const sequelize = new Sequelize(db_name, user, db_pass, {
    host: 'localhost',
    port: db_port,
    dialect: 'postgres',
    logging: false
});

module.exports = { sequelize };