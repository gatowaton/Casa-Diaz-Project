const { Schema, model, default: mongoose } = require("mongoose");

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,   
    },
    description: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
        default: 0,
    },
    image:{
        type: String
    },
    date : {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel