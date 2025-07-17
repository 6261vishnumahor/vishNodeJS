import menu from "../models/menu.js"
const Menu = async (req, res) => {
    try {
        const data = req.body
        const newMenu = new menu(data)
        const response = await newMenu.save()
        console.log('data save')
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'internal server error' })
    }
}
const menuData = async (req, res) => {
    try {
        const data = await menu.find()
        console.log('fatch menudata')
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'internal server error' })
    }
}
const fatchtesteType = async (req, res) => {
    try {
        const testeType = req.params.testeType
        if (testeType == "sweet" || testeType == "spicy" || testeType == "sour") {
            const response = await menu.find({ teste: testeType })
            console.log('fatch data')
            res.status(200).json(response)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'internal server error' })
    }
}
const updatemenudata=async(req,res)=>{
    try{
    const menuId=req.params.id
    const updatemenudata=req.body
    const response=await menu.findByIdAndUpdate(menuId,updatemenudata,{
        new:true,
runValidators:true
    })
    console.log('update menu data')
    res.status(200).json(response)
}
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'internal server error' })
    }
}
const deletemenudata=async(req,res)=>{
    try{
    const menuId = req.params.id
 const response=await menu.findByIdAndDelete(menuId)
    if (!response) {
        return res.status(404).json({ error: 'person not found' })
    }
    console.log('delete data')
    res.status(200).json(response)
}
    catch (err) {
    console.log(err)
    res.status(500).json({ error: 'internal server error' })
}
}

export { Menu, menuData,fatchtesteType,updatemenudata ,deletemenudata}