const express = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/offers' });
const blogController = require("../Controller/blogController")
const Offers = require("../Models/offers")
const blogRouter = express.Router();


blogRouter.post("/add",upload.single('image'),async (req,res)=>{
    if(req.file.path){
        const newPost = Offers({image:req.file.path, type:req.body.type});
        const savePost = await newPost.save();    
        if(!savePost){
            return res.status(403).json({"error":"offer not saved"})
        }
        return res.status(200).json({"msg":"Offer  saved"})
    }
    else{
        return res.status(200).json({"msg":"Image is required"})
    }
});
blogRouter.get("/get",upload.single('image'),async (req,res)=>{
    try {
        const data = await Offers.find();
        if(!data){
            return res.status(404).json({status:false, message: "No Data Found"})
        }
        res.status(200).json({status:true, result:data})
    } catch (error) {
        return res.status(500).json({status:false, message: "Server side Error"})
    }
});
blogRouter.delete("/delete",upload.single('image'),async (req,res)=>{
    const { listingId } = req.body
    try {
        const imageData = await Offers.findById({ _id: listingId });
        if (imageData.length <= 0) {
            return res.status(404).json({
                status:false,
                message:"Data not found."
            });
        }
        const updateData = await Offers.deleteOne({ _id: listingId });
        if (updateData.deletedCount !== 1) {
            return res.status(400).json({
                status:false,
                message:"Unable to update."
            });
        }
        res.status(200).json({
            status:true,
            message:"Listing Deleted sucessfullt"
        });
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        });
    }
});
module.exports = blogRouter