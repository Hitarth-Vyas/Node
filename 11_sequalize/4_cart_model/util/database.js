const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node-complete', 
  'root', 
  '//Hitit1805;',
  {
    dialect: 'mysql',
    host: 'localhost'
  });

  module.exports = sequelize;