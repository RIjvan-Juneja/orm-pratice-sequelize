const Sequelize = require('sequelize').Sequelize;

// db, username,pass,options
const sequelize = new Sequelize('orm_demo','root', 'Dev@123',{
  dialect : 'mysql',
  host : 'localhost',
});

module.exports = sequelize;