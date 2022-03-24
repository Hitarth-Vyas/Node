const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = User;

// sequelize official docs => https://sequelize.org/