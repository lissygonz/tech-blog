const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.tech_blog_db) {
    sequelize = new Sequelize(process.env.tech_blog_db);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;