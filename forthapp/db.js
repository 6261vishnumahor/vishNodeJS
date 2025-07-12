import mongoose from "mongoose";
const mongoURI ='mongodb://localhost:27017/hotels'
mongoose.connect(mongoURI)

const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected mongodb')
})
db.on('disconnected', () => {
    console.log('mongodb disconnected')
})
db.on('error', (err) => {
    console.log('mongoose connection error',err)
})
export default db;