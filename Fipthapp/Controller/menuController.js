import menu from "../models/menu.js"
const Menu=async(req,res)=>{
    try{
        const data=req.body
        const newMenu=new menu(data)
        const response=await newMenu.save()
        console.log('data save')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})
    }
}
export {Menu}