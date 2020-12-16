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
      allowNull: false,
      validate: {
        notEmpty: {args: true, msg: "Username is required"},
        notNull: {args: true, msg: "Username is required"}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {args: true, msg: "Invalid format email"},
        notEmpty: {args: true, msg: "Email is required"},
        notNull: {args: true, msg: "Email is required"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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
      defaultValue: 1000000,
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
    modelName: 'Shipper',
  });
  Shipper.beforeCreate((shipper, option) => {
    shipper.password = hashPassword(shipper.password)
  })
  return Shipper;
};