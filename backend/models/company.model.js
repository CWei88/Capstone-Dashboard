import db from "./db.model.js";
import { DataTypes } from "sequelize";

const Company = db.define('company', {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    industry: {
        type: DataTypes.STRING,
    },
});



export default Company;