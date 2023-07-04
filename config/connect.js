const { Sequelize } = require('sequelize');
const DB = new Sequelize('pbl5', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false
  })
module.exports = DB
