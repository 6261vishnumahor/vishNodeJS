import express from "express"
const router=express.Router();
import {  deleteperson, fatchPersonData, personData, updatePerson, workType } from "../Controller/personController.js";

router.post('/person', personData)
router.get('/person', fatchPersonData)
router.get('/person/:workType', workType)
router.put('/person/:id', updatePerson)
router.delete('/person/:id', deleteperson)
export default router;