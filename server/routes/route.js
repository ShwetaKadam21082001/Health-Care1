import express from "express";
import { addPatient, getPatients } from "../controller/patient-controller.js";


const router = express.Router();


router.post('/add', addPatient)
router.get('/all', getPatients)


export default router;