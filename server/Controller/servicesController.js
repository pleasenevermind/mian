const Services = require("../Models/Services");
const postRequest = async (req,res)=>{
    const {name,email,phone,city, description}= req.body;
    console.log(name,email,phone,city, description)
    if(name && email && phone && city && description){
        const newPost = Services({name,email,phone,city, description});
        const savePost = await newPost.save();    
        if(!savePost){
            return res.status(403).json({"error":"Request not Posted"})
        }
        return res.status(200).json({"msg":"Blog  saved"})
    }
    else{
        return res.status(403).json({
            "error":"Everything should be sent"
        })
    }
    
}
const getRequest = async (req,res)=>{
        const allPosts = await Services.find();
        if(!allPosts){
            return res.status(403).json({status:false,"error":"Blog not Available"})
        }
        return res.status(200).json({
            status:true,
            Requests: allPosts
        })
    
}
module.exports = {
    postRequest,getRequest
}