import { Sequelize } from 'sequelize';
import Report from '../models/report.model.js';
import Company from '../models/company.model.js';
import report from '../models/report.model.js';

export const createReport = async(req, res) => {
    const { companyName, year, haveTransitionPlan } = req.body;
    const company = await Company.findOne({
        where: {
            companyName: companyName
        }
    });
    try {
        const report = await Report.create({
            compId: company.Id,
            year: year,
            haveTransitionPlan: haveTransitionPlan,
        });
        res.status(201).json({msg: `Report Entry Id: ${report.Id} has been successfully created for: ${company.companyName}.`});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
    report.setCompany(company)
}

export const getAllReport = async(req, res) => {
    try {
        const response = await Report.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}