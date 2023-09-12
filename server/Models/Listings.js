const mongoose = require("mongoose");
const listingModel = new mongoose.Schema({
    image:{
        type: String,
        default:""
    },
    name:{
        type: String,
        required: true
    },
    secondaryImages:{
        type:Array,
    },
    color:{
        type: String,
        required: true
    },
    noOfVehicles:{
        type: Number,
        default: 1
    },
    rentInCity:{
        type: String,
        required: true
    },
    rentOutOfCity:{
        type: String,
        required: true
    },
    fuel:{
        type: String,
        required: true
    },
    seating:{
        type: String,
        required: true
    },
    transmission:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
});
module.exports = mongoose.model("Listing", listingModel);