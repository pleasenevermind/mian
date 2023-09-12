const mongoose = require("mongoose");
const servicesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model("Services", servicesSchema);