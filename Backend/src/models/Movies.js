import { DataTypes } from 'sequelize';
import db from '../database/connection.js';

const Movie = db.sequelize.define('Movie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  overview: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  popularity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  vote_average: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  vote_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  backdrop_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  poster_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genre_ids: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
});

export default Movie;
