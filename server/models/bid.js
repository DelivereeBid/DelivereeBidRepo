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
    }
  };
  Bid.init({
    product_picture: DataTypes.STRING,
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bid',
  });
  return Bid;
};