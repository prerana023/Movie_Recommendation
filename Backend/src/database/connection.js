import { Sequelize } from "sequelize";
import dotenv from "dotenv"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const sequelizeConnection = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
});

export const db = {
    sequelize: sequelizeConnection,
    Sequelize: Sequelize,
};

export const initModels = async () => {
    try {
      await sequelizeConnection.authenticate();
      console.log('Connection has been established successfully.');
  
      await sequelizeConnection.sync({ force: false }); 
      console.log('Database synchronized.');
    
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };


