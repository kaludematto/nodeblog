const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'techblog.sqlite'
});

module.exports = connection;