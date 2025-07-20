import mongoose from "mongoose"
import bcrypt from "bcrypt"
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique:true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
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
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
PersonSchema.pre('save',async(next)=>{
    const person=this;
    if(! person.ismodified(''))
})
export default mongoose.model('person', PersonSchema)