import mongoose from "mongoose";
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    teste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    is_drinck: {
        type: Boolean,
        default: false,
        required: true
    },
    ingredients: {
        type: String,
        default: []
    },
    num_sales: {
        type: String,
        default: 0
    }
})
export default mongoose.model('Menu', menuSchema)