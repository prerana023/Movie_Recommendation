import Movie from "./Movies.js";
import { db } from "../database/connection.js";

const initModels = async () => {
  await db.sequelize.sync();
};

export { initModels, Movie };