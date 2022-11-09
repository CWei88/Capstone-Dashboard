import express from "express";
import { preprocessFile } from "../controllers/preprocess.controller";
const router = express.Router();

router.post('/preprocess', preprocessFile);

export default router;
