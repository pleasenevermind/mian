const mongoose = require("mongoose");
const listingModel = new mongoose.Schema({
    image:{
        type: String,
        default:""
    },
    type:{
        type: String,
        default:""
    }
});
module.exports = mongoose.model("Offers", listingModel);