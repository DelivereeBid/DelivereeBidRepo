'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Transporter)
      Post.belongsTo(models.Bid)
    }
  };
  Post.init({
    TransporterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {args: true, msg: "TransporterId is required"},
        notNull: {args: true, msg: "TransporterId is required"}
      },
      references: {
        model: 'Transporter',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    BidId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {args: true, msg: "BidId is required"},
        notNull: {args: true, msg: "BidId is required"}
      },
      references: {
        model: 'Bid',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {args: true, msg: "Price is required"},
        notNull: {args: true, msg: "Price is required"},
        min(value){
          if(value < 0) throw new Error ("Price cannot minus")
        }
      }
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: "Pending"
    },
    tracking_log: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {args: true, msg: "Tracking log is required"},
        notNull: {args: true, msg: "Tracking log is required"}
      }
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    vehicle: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};