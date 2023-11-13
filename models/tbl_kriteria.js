'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_kriteria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_kriteria.init({
    scale_priority: DataTypes.INTEGER,
    name_kriteria: DataTypes.STRING,
    weight_score: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'tbl_kriteria',
  });
  return tbl_kriteria;
};