const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Videos = db.define('videos', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  title: {
    type:          DataTypes.STRING(150),
    allowNull:     false
  },
  url: {
    type:          DataTypes.STRING,
    allowNull:     false,
    validate: {
      isUrl:       true 
    }
  },
  idCourse: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_course'
  }
});

module.exports= Videos;