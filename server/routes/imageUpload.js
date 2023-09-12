const express = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/blogs' });
const Router = express.Router()

Router.post("/upload",upload.single('image'),(req,res)=>{
    if(req.file.path){
        return res.json({
            status:true,
            message:'uploaded',
            result:req.file.path
        })
    }
});

module.exports = Router;