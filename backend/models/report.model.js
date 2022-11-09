import db from "./db.model.js";
import { DataTypes } from "sequelize";

const Report = db.define('report', {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // Attribute 7: Have your Scope 1 - 2 & Scope 3 emissions been verified by a third party?
    emissionAmountVerified: {
        type: DataTypes.BOOLEAN,
    },
    emissionAmountVerifiedSentences: {
        type: DataTypes.STRING,
    },
    // Attribute 8: Do you have an active program to support increasing green space and promote biodiversity?
    hasActiveProgram: {
        type: DataTypes.BOOLEAN,
    },
    hasActiveProgramSentences: {
        type: DataTypes.STRING,
    },
    // Attribute 12: Whether or not have a net zero goal
    hasNetZeroGoal: {
        type: DataTypes.BOOLEAN,
    },
    hasNetZeroGoalSentences: {
        type: DataTypes.STRING,
    },
    // Attribute 14: Has Protocol
    hasProtocol: {
        type: DataTypes.BOOLEAN,
    },
    hasProtocolSentences: {
        type: DataTypes.STRING,
    },
    // Attribute 15: Has Emission Target Verified
    emissionTargetVerified: {
        type: DataTypes.BOOLEAN,
    },
    emissionTargetVerifiedSentences: {
        type: DataTypes.STRING,
    },
    // Attribute 16: Do you have a low carbon transition plan?
    hasTransitionPlan: {
        type: DataTypes.BOOLEAN,
    },
    hasTransitionPlanSentences: {
        type: DataTypes.STRING,
    },
    // Attribute 17: Do you provide incentives to your senior leadership team for the management of climate related issues?
    hasLeadershipIncentive: {
        type: DataTypes.BOOLEAN,
    },
    hasLeadershipIncentiveSentences: {
        type: DataTypes.STRING,
    },
    // Attribute 22: Does your transition plan include direct engagement with suppliers to drive them to reduce their emissions, or even switching to suppliers producing low carbon materials?
    hasSupplierEngagement: {
        type: DataTypes.BOOLEAN,
    },
    hasSupplierEngagementSentences: {
        type: DataTypes.STRING,
    },
    // Attribute 25: Do you engage with value chain on climate-related issues?
    valueChainEngagementScale: {
        type: DataTypes.INTEGER,
    },
    valueChainEngagementSentences: {
        type: DataTypes.STRING,
    },
});

export default Report;