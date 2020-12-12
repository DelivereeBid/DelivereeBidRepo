'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helper/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Shipper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shipper.hasMany(models.Bid)
    }
  };
  Shipper.init({
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
        len: {
          args: [4, 10],
          msg: "Password length minimum 4 character and maximum 10 character"
        }
      }
    },
    profile_picture: {
      type: DataTypes.STRING,
      defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    wallet: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  }, {
    sequelize,
    modelName: 'Shipper',
  });
  Shipper.beforeCreate((shipper, option) => {
    shipper.password = hashPassword(shipper.password)
  })
  return Shipper;
};