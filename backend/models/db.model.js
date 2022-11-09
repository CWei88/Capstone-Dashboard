import dbConfig from '../config/db.config.js';
import Sequelize from "sequelize";

// Create a connection to the database
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {   
        host: dbConfig.HOST,
        dialect: dbConfig.DB_TYPE,
        operationsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }, 
);

// open the MySQL connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

export default sequelize;