import mongoose from "mongoose"
const PersonSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age: {
        type: Number,
        require: true
    },

    email: {
        type: String,
        require: true,
        // unique:true
    },
    work: {
        type: String,
        enum:['chef','waiter','manager'],
        require: true
    },

    address: {
        type: String,
        require: true
    },
    sallary: {
        type: Number,
        require: true
    },
})
export default mongoose.model('person',PersonSchema)