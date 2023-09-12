const express = require("express");
const controller = require("../Controller/userController")
const userRouter = express.Router();
userRouter.post("/create-user", controller.createUser);
userRouter.post("/sign-in-user", controller.signIneUser);
userRouter.get("/get-user-data", controller.getUserData);
userRouter.put("/change-password", controller.changePassword);
module.exports = userRouter;