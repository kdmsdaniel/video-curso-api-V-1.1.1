const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Courses = db.define('courses', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  title: {
    type:          DataTypes.STRING(100),
    allowNull:     false
  },
  description: {
    type:          DataTypes.STRING,
    allowNull:     false
  },
  instructur: {
    type:          DataTypes.STRING(30),
    allowNull:     false
  }
});

module.exports = Courses;