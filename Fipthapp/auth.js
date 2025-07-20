import passport from "passport";
import LocalStrategy from "passport-local"
import person from "./models/person.js";
passport.use(new LocalStrategy(async(username,password,done)=>{
    try{
        console.log('recieved Credentials',username,password)
        const user=await person.findOne({username})
        if(!user){
            return done(null,false,{massage:'incorrect username'})
        }

        const passwordMatch=user.password==password?true:false
        if(passwordMatch){
            return done(null,user)
        }
        else{
            return done(null,false,{massage:'incorrect password'})
        }
        
    }
    catch(err){
        return done(err)
    }
}))
export default passport