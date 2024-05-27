import db from "../database/connection.js";
import Movie from "./Movies.js";

const initModels = async () => {
    try {
      await db.sequelize.authenticate();
      console.log('Connection has been established successfully.');
  
      await db.sequelize.sync({ force: false }); 
      console.log('Database synchronized.');
  
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  export { db, initModels };