'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bid.belongsTo(models.Shipper)
    }
  };
  Bid.init({
    product_picture: {
      allowNull: false,
      defaultValue: "https://www.indosecuritysystem.com/image/blank_image.png",
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Product picture is required"},
        notNull: {args: true, msg: "Product picture is required"}
      }
    },
    product_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Product name is required"},
        notNull: {args: true, msg: "Product name is required"}
      }
    },
    description: DataTypes.STRING,
    from: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "From is required"},
        notNull: {args: true, msg: "From is required"}
      }
    },
    to: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "To destination is required"},
        notNull: {args: true, msg: "To destination is required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Bid',
  });
  return Bid;
};