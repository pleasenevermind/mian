const Blog = require("../Models/Blogs");
const BlogSubheadings = require("../Models/BlogSubheadings");
const postBlog = async (req, res) => {
    const { title, description, subHeadings, image, coverImage } = req.body;
    console.log(title, description, subHeadings, image, coverImage)
    if (!title || !description || !subHeadings || !image || !coverImage) {
        return res.json({ status: false, message: "title, description, subHeadings, image, coverImage are required" })
    }
    if (image) {
        const newPost = Blog({ title, description, image, subHeadings, coverImage });
        const savePost = await newPost.save();
        console.log(savePost)
        if (!savePost) {
            return res.status(403).json({ "error": "Blog not saved" })
        }
        return res.json({ status:true,"message": "Blog  saved" })
    }
    const newPost = Blog({ title, description });
    const savePost = await newPost.save();
    if (!savePost) {
        return res.status(403).json({ "error": "Blog not saved" })
    }
    return res.json({ status:true,"message": "Blog  saved" })

}
const getBlogs = async (req, res) => {
    const allPosts = await Blog.find();
    if (!allPosts) {
        return res.status(403).json({ "error": "Blog not Available" })
    }
    await Promise.all(
        allPosts.map(async (item, index) => {
            if (item?.subHeadings?.length > 0) {
                const result = await BlogSubheadings.find({ _id: { $in: item.subHeadings } })
                if (result) {
                    allPosts[index].subHeadings = result
                }
            }
        })
    )
    return res.status(200).json({ blogs: allPosts })

}
const deleteBlog = async (req, res) => {
    const { listingId } = req.body
    try {
        const vehicleData = await Blog.findById({ _id: listingId });
        if (vehicleData.length <= 0) {
            return res.status(404).json({
                status: false,
                message: "Data not found."
            });
        }
        const updateData = await Blog.deleteOne({ _id: listingId });
        if (updateData.deletedCount !== 1) {
            return res.status(400).json({
                status: false,
                message: "Unable to update."
            });
        }
        res.status(200).json({
            status: true,
            message: "Listing Deleted sucessfully"
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }

}
const postSubHeadings = async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.json({ status: false, message: "title, description are required" })
    }
    const newPost = BlogSubheadings({ title, description });
    const savePost = await newPost.save();
    if (!savePost) {
        return res.status(403).json({ status: false, message: "Heading not saved" })
    }
    return res.json({
        status: true,
        message: "Heading  saved",
        result: savePost
    })

}
module.exports = {
    postBlog, getBlogs, deleteBlog, postSubHeadings
}