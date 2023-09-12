const Gallery = require("../Models/Gallery");
const uploadImage = async (req,res)=>{
    // const {data}= req.files;
    try {
        const newImage = Gallery({
            image: req.file.path
        });
        const saveImage = await newImage.save();
        if(!saveImage){
            return res.status(403).json({status:false, message: "UnKnown Error Occured"})
        }
        res.status(200).json({status:true, message: "Image Saved sucessfully"})
    } catch (error) {
        return res.status(500).json({status:false, message: "Server side Error"})
    }
}
const getImages = async (req,res)=>{
    try {
        const data = await Gallery.find();
        if(!data){
            return res.status(404).json({status:false, message: "No Data Found"})
        }
        res.status(200).json({data})
    } catch (error) {
        return res.status(500).json({status:false, message: "Server side Error"})
    }
}
const deleteImages = async(req,res)=>{
    const { listingId } = req.body
    try {
        const imageData = await Gallery.findById({ _id: listingId });
        if (imageData.length <= 0) {
            return res.status(404).json({
                status:false,
                message:"Data not found."
            });
        }
        const updateData = await Gallery.deleteOne({ _id: listingId });
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
}
module.exports = {
    uploadImage,
    getImages,
    deleteImages
}