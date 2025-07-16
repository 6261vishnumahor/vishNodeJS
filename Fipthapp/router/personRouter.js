import express from "express"
const router=express.Router();
import {  deleteperson, fatchPersonData, personData, updatePerson } from "../Controller/personController.js";

router.post('/person', personData)
router.get('/person', fatchPersonData)
router.put('/person/:id', updatePerson)
router.delete('/person/:id', deleteperson)
export default router;