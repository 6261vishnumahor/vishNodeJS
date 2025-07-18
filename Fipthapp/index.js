import express from "express"
import db from "./db.js"
// import person from "./models/person.js";
// import Menu from "./models/menu.js"
import bodyParser from "body-parser";
import router from "./router/personRouter.js";
import Menurouter from "./router/menuRouter.js";
import passport from "passport";
import LocalStategy from "passport-local.Strategy"

const app = express();
app.use(bodyParser.json())

const logrequest=(req,res,next)=>{
    console.log(`${new Date().toLocaleString()}Request made to :${req.originalUrl}`)
    next()
}

app.get("/", (req, res) => {
    res.send("this is home page")
})
app.use(passport.initialize())
app.use(logrequest)
// app.post("/person", async (req, res) => {
//     try {
//         const data = req.body
//         const newperson = new person(data)
//         const response = await newperson.save();
//         console.log('data save')
//         res.status(200).json(response)
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json('enternal server error')
//     }
// })
// app.get("/person",async(req,res)=>{
//     try{
//     const data=await person.find();
//     console.log("data fatch")
//     res.status(200).json(data)
//     }
//     catch(err){
// console.log(err)
//         res.status(500).json(err, 'enternal server error')
//     }
// })
// app.post("/menu", async(req,res)=>{
//     try{
// const data2=req.body
// const menudata=new Menu(data2)
// const saveMenu=await menudata.save()
// console.log('save menu data')
// res.status(200).json(saveMenu)
//     }
//     catch(err){
//         console.log(err)
// res.status(500).json(err,'enternal server error')
//     }
// })
// app.get('/menu',async(req,res)=>{
//     try{
//     const data=await Menu.find()
//     console.log('fatch data')
//     res.status(200).json(data)
//     }
//     catch(err){
// console.log(err)
//         res.status(500).json(err, 'enternal server error')
//     }
// })
app.use(router)
app.use(Menurouter)
app.listen(4000, () => {
    console.log("the run server 3000 port")
})