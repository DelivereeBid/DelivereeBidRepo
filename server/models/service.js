'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Service.belongsTo(models.Transporter)
    }
  };
  Service.init({
    service_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Service name is required"},
        notNull: {args: true, msg: "Service name is required"}
      }
    },
    service_picture: {
      defaultValue: "https://www.indosecuritysystem.com/image/blank_image.png",
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Service picture is required"},
        notNull: {args: true, msg: "Service picture is required"}
      }
    },
    vehicle: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Vehicle is required"},
        notNull: {args: true, msg: "Vehicle is required"}
      }
    },
    price: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Price is required"},
        notNull: {args: true, msg: "Price is required"}
      }
    },
    tracking_log: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Tracking log is required"},
        notNull: {args: true, msg: "Tracking log is required"}
      }
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Status is required"},
        notNull: {args: true, msg: "Status is required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};