const express = require("express");
const servicesController = require("../Controller/servicesController")

const blogRouter = express.Router();


blogRouter.post("/postRequest",servicesController.postRequest);
blogRouter.get("/getRequests",servicesController.getRequest);


module.exports = blogRouter;