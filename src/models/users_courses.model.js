const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const UsersCourses = db.define('users_courses', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  idUser: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_user'
  },
  idCourse: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'id_course'
  }
},
{
  timestamps:       false
});

module.exports = UsersCourses;