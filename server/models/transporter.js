'use strict';
const { hashSync } = require('bcryptjs');
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Transporter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transporter.hasMany(models.Service)
    }
  };
  Transporter.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Username is required"}
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: {args: true, msg: "Email is required"}
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Password is required"},
        len: [6, 10]
      }
    },
    profile_picture: DataTypes.STRING,
    wallet: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transporter',
  });

  Transporter.beforeCreate((transporter, option) => {
    transporter.password = hashPassword(transporter.password)
  })
  return Transporter;
};