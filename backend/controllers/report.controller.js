import { Sequelize } from 'sequelize';
import Report from '../models/report.model.js';
import Company from '../models/company.model.js';

export const createReport = async(req, res) => {
    const { 
        companyName, 
        year, 
        industry, 
        emissionAmountVerifiedSentences, //Attr7
        hasActiveProgramSentences, //Attr8
        hasNetZeroGoalSentences, //Attr12 
        hasProtocolSentences, //Attr14
        emissionTargetVerifiedSentences, //Attr15
        hasTransitionPlanSentences, //Attr16
        hasLeadershipIncentiveSentences, //Attr17
        hasSupplierEngagementSentences, //Attr22
        hasValueChainEngagementSentences //Attr25
    } = req.body;
    try {
        const report = await Report.create({
            companyName: companyName,
            year: year,
            industry:industry,
            //Attr7
            emissionAmountVerified: (emissionAmountVerifiedSentences != ''),
            emissionAmountVerifiedSentences: emissionAmountVerifiedSentences,
            //Attr8
            hasActiveProgram: (hasActiveProgramSentences != ''),
            hasActiveProgramSentences: hasActiveProgramSentences,
            //Attr12 
            hasNetZeroGoal: (hasNetZeroGoalSentences != ''),
            hasNetZeroGoalSentences: hasNetZeroGoalSentences,
            //Attr14
            hasProtocol: (hasProtocolSentences != ''),
            hasProtocolSentences: hasProtocolSentences,
            //Attr15
            emissionTargetVerified: (emissionTargetVerifiedSentences != ''),
            emissionTargetVerifiedSentences: emissionTargetVerifiedSentences,
            //Attr16
            hasTransitionPlan: (hasTransitionPlanSentences != ''),
            hasTransitionPlanSentences: hasTransitionPlanSentences,
            //Attr17
            hasLeadershipIncentive: (hasLeadershipIncentiveSentences != ''),
            hasLeadershipIncentiveSentences: hasLeadershipIncentiveSentences,
            //Attr23
            hasSupplierEngagement: (hasSupplierEngagementSentences != ''),
            hasSupplierEngagementSentences: hasSupplierEngagementSentences,
            //Attr25
            hasValueChainEngagement: (hasValueChainEngagementSentences != ''),
            hasValueChainEngagementSentences: hasValueChainEngagementSentences,
        });
        const findDupCompany = await Company.findOne({
            where: {
                companyName: companyName,
                industry: industry
            }
        });
        if (!findDupCompany) {
            const company = await Company.create({
                companyName: companyName,
                industry:industry
        });
        }
        res.status(201).json({msg: `Report Entry Id: ${report.Id} has been successfully created for: ${company.companyName}.`});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const getAllReport = async(req, res) => {
    try {
        const response = await Report.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getReportsByCompany = async(req, res) => {
    try {
        const response = await Report.findAll({
            where: {
                companyName: req.params.companyName
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}