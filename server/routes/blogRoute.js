const express = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/blogs' });
const blogController = require("../Controller/blogController")

const blogRouter = express.Router();


blogRouter.post("/postBlog",blogController.postBlog);
blogRouter.get("/getBlogs",blogController.getBlogs);
blogRouter.delete("/deleteblog",blogController.deleteBlog);
blogRouter.post("/postSubheadings",blogController.postSubHeadings)
module.exports = blogRouter;