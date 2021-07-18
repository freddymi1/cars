const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    marque: {
        type: String,
        required:true
    },
    description:{
        type:String,
        required: true
    },
    photo:{
        type:String,
        required: false
    },
    matricule:{
        type:String,
        required: true,
        unique: true
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Cars", carSchema);