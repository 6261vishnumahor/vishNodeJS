import express from "express"
import db from "./db.js"
import person from "./models/person.js";
 const app=express();

 app.get("/",(req,res)=>{
    res.send("this is home page")
 })
 app.post("/person",async(req,res)=>{
   try{
const data=req.body
const newperson=new person(data)
const response=await newperson.save();
console.log('data save')
res.json(response)
   }
   catch(err){
console.log(err)
 res.json('enternal server error')
   }
 })
 app.listen(3000,()=>{
   console.log("the run server 3000 port")
 })