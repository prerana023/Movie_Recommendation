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
sequelizeConnection.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error in databse: ' + err))

export default sequelizeConnection;