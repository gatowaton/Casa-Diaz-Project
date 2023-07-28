const { Schema, model, default: mongoose } = require("mongoose");


const productSchema = new Schema({
    Titulo: {
        type: String,
        required: true
    },
    CodigoProducto:{
        type: Number,
        default: 0
    },
    CodigoAlternativo:{
        type: Number,
        default: 0
    },
    Categoria:{
        type: String
    },
    SubCategoria:{
        type: String
    },
    UnidadMedida:{
        type: String
    },
    Marca: {
        type: String,   
    },
    PrecioVentaNeto:{
        type: Number,
        required: true,
        default: 0
    },
    PrecioVentaBruto:{
        type: Number,
        required: true,
        default: 0
    },
    Exento:{
        type: String 
    },
    CodigoImpuesto:{
        type: Number,
        default: 0 
    },
    Inventariable:{
        type: String
    },
    Activo:{
        type: String
    },
    Stock:{
        type: Number,
        required: true,
        default: 0,
    },
    Foto:{
        type: String
    },
    date : {
        type: Date,
        default: Date.now
    },
},{
    timestamps: true
})

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel