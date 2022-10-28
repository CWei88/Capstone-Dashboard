import express from "express";
import { createReport, getAllReport } from "../controllers/report.controller.js";

const router = express.Router();

router.post('/report', createReport);
router.get('/report', getAllReport);

export default router;
