const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Users = db.define('users', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  firstName: {
    type:          DataTypes.STRING(15),
    allowNull:     false,
    field:         'first_name'
  },
  lastName: {
    type:          DataTypes.STRING(15),
    allowNull:     true,
    field:         'last_name'
  },
  password: {
    type:          DataTypes.STRING(18),
    allowNull:     false
  },
  email: {
    type:          DataTypes.STRING(30),
    allowNull:     false,
    unique:        true,
    validate:      {
      isEmail:     true,
    }
  }
});

module.exports = Users;