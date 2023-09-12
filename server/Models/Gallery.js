const mongoose = require("mongoose");
const gallerySchema =new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model("Gallery", gallerySchema);