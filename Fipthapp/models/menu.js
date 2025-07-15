import mongoose from "mongoose";
const menuSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
type:Number,
require:true
    },
    teste:{
        type:String,
        enum:['sweet','spicy','sour'],
        require:true
    },
    is_drinck:{
        type:Boolean,
        default:false,
        require:true
    },
    ingredients:{
        type:String,
        default:[]
    },
    num_sales:{
        type:String,
        default:0
    }
})
export default mongoose.model('Menu',menuSchema)