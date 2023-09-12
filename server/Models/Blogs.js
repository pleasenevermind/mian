const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required: true 
    },
    description:{
        type:String,
        required: true 
    },
    subHeadings:{
        type:Array,
        default:[]
    },
    image:{
        type:String,
        default:''
    },
    coverImage:{
        type:String,
        default:''
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model("Blog", blogSchema);