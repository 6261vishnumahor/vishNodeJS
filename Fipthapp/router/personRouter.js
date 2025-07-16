import express from "express"
const router=express.Router();
import person from "../models/person.js";

router.post('/person',async(req,res)=>{
    try{
        const data=req.body
        const Newperson=new person(data)
        const response=await Newperson.save()
        console.log(response)
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500),json({error: 'internal server error'})
    }
})
export default router;