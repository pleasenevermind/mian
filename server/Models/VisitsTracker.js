const mongoose = require("mongoose")
const websiteVisitsSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    visits: { type: Number, default: 0 },
});
module.exports = mongoose.model("Visits", websiteVisitsSchema);