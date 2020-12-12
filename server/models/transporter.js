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
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Username is required"},
        notNull: {args: true, msg: "Username is required"}
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isEmail: {args: true, msg: "Invalid format email"},
        notEmpty: {args: true, msg: "Email is required"},
        notNull: {args: true, msg: "Email is required"}
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Password is required"},
        notNull: {args: true, msg: "Password is required"},
        len: {
          args: [4, 10],
          msg: "Password length minimum 4 character and maximum 10 character"
        }
      }
    },
    profile_picture: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    wallet: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        minus(value){
          if(value < 0){
            throw new Error ('Wallet cannot minus')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Transporter',
  });

  Transporter.beforeCreate((transporter, option) => {
    transporter.password = hashPassword(transporter.password)
  })
  return Transporter;
};