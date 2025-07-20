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
        unique: true
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
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
PersonSchema.pre('save', async function(next){
    const person = this;
    if (!person.isModified("password"))
        {return next()}
    try {
        //hash password genration
        // const salt="this is a salt"
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(person.password, salt)
        //override the plain password with the hashed one
        person.password = hashedPassword
        next()

    }
    catch (err) {
        return next(err)
    }

})
PersonSchema.methods.comparePassword = async function(condidatePassword){
    try {
        const isMatch = await bcrypt.compare(condidatePassword, this.password)
        return isMatch
    }
    catch (err) {
        throw err;
    }
}
export default mongoose.model('person', PersonSchema)