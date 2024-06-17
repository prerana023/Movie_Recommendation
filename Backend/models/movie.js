'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    overview: DataTypes.TEXT,
    release_date: DataTypes.DATE,
    popularity: DataTypes.FLOAT,
    vote_average: DataTypes.FLOAT,
    vote_count: DataTypes.INTEGER,
    backdrop_path: DataTypes.STRING,
    poster_path: DataTypes.STRING,
    genre_ids: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};