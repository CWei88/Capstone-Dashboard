import express from "express";
import { createReport, getAllReport, getReportsByCompany } from "../controllers/report.controller.js";

const router = express.Router();

router.post('/report', createReport);
router.get('/report', getAllReport);
router.get('/report/companyName/:companyName', getReportsByCompany)

export default router;
