import express from "express";
import { createCompany, getAllCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.post('/company', createCompany);
router.get('/company', getAllCompany);

export default router;