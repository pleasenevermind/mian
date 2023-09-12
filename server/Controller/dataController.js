const Listings = require("../Models/Listings.js");

const postData = async (req, res) => {
    const { color,image, secondaryImages, name, rentInCity, rentOutOfCity, fuel, seating, transmission, description } = req.body;
    console.log(secondaryImages)
    try {
        const findone = await Listings.findOne({ $and: [{ name: name }, { color: color }, { seating: seating }] });
        if (findone) {
            const updateOne = await findone.updateOne({ $set: { noOfVehicles: findone.noOfVehicles + 1 } });
            if (updateOne.modifiedCount !== 1) {
                return res.status(400).json("Unable to update.");
            }
            return res.status(200).json("Listing Already Exsisted with time vehicle name, color, seating and transmission. Listing updated with number of vehicles availabe")
        }
        const postListing = new Listings({
            color,secondaryImages:secondaryImages, name, rentInCity, rentOutOfCity, fuel, seating, transmission, description, image
        });
        if (!postListing) {
            return res.status(404).json("Data Not saved. Internal Server Error");
        }
        const saveData = await postListing.save();
        if (!saveData) {
            return res.status(401).json("Data Not Posted. Internal Server Error");
        }
        res.status(200).json("Data Posted Sucessfully");
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        });
    }
}
const getData = async (req, res) => {
    try {
        console.log("in listings")
        const vehicleData = await Listings.find();
        if (!vehicleData) {
            return res.status(404).json("Data Not Found");
        }
        res.status(200).json(vehicleData);
    } catch (error) {

    }
}
const getSpecificData = async (req, res) => {
    const { id } = req.query
    try {
        const vehicleData = await Listings.findById(id)
        if (vehicleData.length <= 0) {
            return res.status(404).json("Data Not Found");
        }
        res.status(200).json(vehicleData);
    } catch (error) {

    }
}
const editListing = async (req, res) => {
    const { listingId, color, name, rentInCity, rentOutOfCity, fuel, seating, transmission,noOfVehicles, description } = req.body
    try {
        const vehicleData = await Listings.findById({ _id: listingId });
        if (vehicleData.length <= 0) {
            return res.status(404).json("Data Not Found");
        }
        const newData = { color, name, rentInCity, rentOutOfCity, fuel, seating, noOfVehicles, transmission, description };

        const updateData = await Listings.updateOne({ _id: listingId }, { $set: newData });

        if (updateData.modifiedCount !== 1) {
            return res.status(400).json("Unable to update.");
        }
        res.status(200).json("Data Updated sucessfullt");
    } catch (error) {
        res.status(500).json(error);
    }
}
const deleteListing = async (req, res) => {
    const { listingId } = req.body
    try {
        const vehicleData = await Listings.findById({ _id: listingId });
        if (vehicleData.length <= 0) {
            return res.status(404).json({
                status:false,
                message:"Data not found."
            });
        }
        const updateData = await Listings.deleteOne({ _id: listingId });
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
    postData,
    getData,
    getSpecificData,
    editListing,
    deleteListing
}