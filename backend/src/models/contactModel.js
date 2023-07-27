const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    typeRequest:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    userType:{
        type: String,
        required: true
    },
    rut:{
        type: String,
        required: true
    },
    request:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model("ContactModel", contactSchema)