import express from "express"
import db from "./db.js"
 const app=express();

 app.get("/",(req,res)=>{
    res.send("this is home page")
 })
 app.listen(3000)