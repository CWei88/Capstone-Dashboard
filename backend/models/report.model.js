import db from "./db.model.js";
import { DataTypes } from "sequelize";

const Report = db.define('report', {
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hasTransitionPlan: {
        type: DataTypes.BOOLEAN,
    },
    hasTransitionPlanSentences: {
        type: DataTypes.STRING,
    },
});

export default Report;