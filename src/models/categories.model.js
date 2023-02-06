const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Categories = db.define('categories', {
  id: {
    primaryKey:    true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  name: {
    type:          DataTypes.STRING(25),
    allowNull:     false
  },
  idCourse: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_course'
  }
});

module.exports = Categories;