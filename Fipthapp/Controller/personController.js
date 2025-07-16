import person from "../models/person.js"
const personData=async(req,res)=>{
    try{
const data=req.body
const newperson=new person(data)
const response=await newperson.save()
console.log(response)
res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})
    }
}
const fatchPersonData=async(req,res)=>{
    try{
        const data=await person.find()
        console.log('fatch data')
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'internal server error' })
    }
}
const updatePerson=async(req,res)=>{
    try{
        const personId=req.params.id
        const updatePersonData=req.body
        const response=await person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,  //return the update document
            runValidators:true //run mongoose validation
        })
        if(!response){
            res.status(404).json({error:'person not found'})
        }
        console.log('data fatch')
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'internal server error' })
    }
}
const deleteperson=async(req,res)=>{
    try{
const personId=req.params.id
const response=await person.findByIdAndDelete(personId)
if(!response){
    return res.status(404).json({error:'person not found'})
}
console.log('delete data')
res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'internal server error' })
    }
}

export {personData,fatchPersonData,updatePerson,deleteperson}