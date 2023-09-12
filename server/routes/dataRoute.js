const express = require("express");
const DataRouter = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/listings' });

const dataController  = require("../Controller/dataController.js");
DataRouter.post("/postData", dataController.postData);
DataRouter.get("/getData", dataController.getData);
DataRouter.get("/getSpecificListing", dataController.getSpecificData);
DataRouter.put("/editListing", dataController.editListing);
DataRouter.delete("/deleteListing", dataController.deleteListing);
module.exports = DataRouter;