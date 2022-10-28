import { Sequelize } from 'sequelize';
import Company from '../models/company.model.js';

export const createCompany = async(req, res) => {
    const {compName, compIndustry} = req.body;
    const mrtDatetimeFormatted = new Date(mrtDatetime);
    try {
        const company = await Company.create({
            companyName: compName,
            industry: compIndustry,
            mrtDatetime: mrtDatetimeFormatted,
        });
        res.status(201).json({msg: `Company Entry Id: ${company.Id} has been successfully created for: ${company.companyName}.`});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const getAllCompany = async(req, res) => {
    try {
        const response = await Company.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}