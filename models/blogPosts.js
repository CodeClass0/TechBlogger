const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    postedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogpost',
  }
);

module.exports = Blog;