const express = require("express")
const visitsRouter = express.Router();
visitsRouter.post("/add-visit");
visitsRouter.get("/get-visits");

module.exports = visitsRouter;