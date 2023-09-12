const express = require("express");
const galleryController = require("../Controller/galleryController");
const multer = require("multer");
const upload = multer({ dest: 'uploads/gallery' });
const galleryRouter = express.Router();
galleryRouter.post("/postImages", upload.single('image'), galleryController.uploadImage)
galleryRouter.get("/getImages", galleryController.getImages)
galleryRouter.delete("/deleteImages", galleryController.deleteImages)

module.exports = galleryRouter;